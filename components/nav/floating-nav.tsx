"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";
import { EmblemMark } from "@/components/ui/brand-mark";
import { GlassPillCanvas } from "@/components/nav/glass-pill-canvas";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/exhibiciones", label: "Exhibiciones" },
  { href: "/especies", label: "Galería" },
  { href: "/contacto", label: "Contáctenos" },
];

export function FloatingNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cursor-tracking spotlight — escribe --mx / --my / --m-opacity en línea
  // sobre el elemento, lo cual el ::before del .glass-nav usa para dibujar
  // el halo bioluminiscente bajo el cursor. Listener directo en DOM (no
  // pasa por React state) para mantener 60fps sin re-renders.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    const onEnter = () => el.style.setProperty("--m-opacity", "1");
    const onLeave = () => el.style.setProperty("--m-opacity", "0");
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
        className="fixed left-0 right-0 top-4 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:top-6"
      >
        {/* LEFT — brand: emblema + Aquarium wordmark, en su composición
            original. Sin glass alrededor: la marca respira sobre el fondo. */}
        <Link href="/" className="group flex items-center gap-3">
          <EmblemMark size={56} />
          <span className="hidden font-display text-[22px] font-medium leading-none tracking-tight text-foam sm:inline-block">
            Aquarium
          </span>
        </Link>

        {/* RIGHT — nav pill desktop con canvas 3D (cristal real) + burger mobile */}
        <motion.div
          ref={navRef}
          animate={{ scale: scrolled ? 0.97 : 1 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className={cn(
            "relative hidden items-center gap-0.5 rounded-full p-2 glass-nav-shell lg:flex",
            scrolled && "glass-nav-shell-scrolled",
          )}
        >
          {/* Pill 3D fotorreal — Three.js + MeshPhysicalMaterial.
              Vive detrás de los links con z-index implícito por orden DOM. */}
          <GlassPillCanvas />

          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative z-10 rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-500 ease-fluid",
                  active ? "text-foam" : "text-foam/70 hover:text-foam",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 34,
                    }}
                    className="absolute inset-0 rounded-full glass-bubble-icon"
                  />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </motion.div>

        {/* Burger — mobile only, mismo lenguaje glass que el resto */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
          className="relative flex size-10 items-center justify-center rounded-full glass-bubble text-foam lg:hidden"
        >
          {open ? <X size={16} /> : <List size={16} />}
        </button>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-abyss/85 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex min-h-[100dvh] flex-col justify-end p-6 pb-12">
              <ul className="space-y-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                      delay: 0.1 + i * 0.05,
                    }}
                  >
                    <Link
                      href={l.href}
                      className="flex items-baseline justify-between border-b border-foam/10 pb-3 font-display text-3xl tracking-tight text-foam"
                    >
                      <span>{l.label}</span>
                      <span className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

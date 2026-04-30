import Link from "next/link";
import { BrandLockup } from "@/components/ui/brand-mark";

const navLinks = [
  { label: "Exhibiciones", href: "/exhibiciones" },
  { label: "Galería", href: "/especies" },
  { label: "Conservación", href: "/conservacion" },
  { label: "Investigación", href: "/conservacion" },
  { label: "Noche bioluminiscente", href: "/exhibiciones" },
];

const meta = ["Aviso legal", "Privacidad", "Sostenibilidad", "Prensa"];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-foam/10 bg-abyss text-foam">
      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        {/* Top — todo en una línea horizontal: brand + descripción + nav */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Brand block — logo prominente + meta + descripción al lado */}
          <div className="flex items-center gap-5">
            <BrandLockup
              width={150}
              height={180}
              className="flex-shrink-0"
            />
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-eyebrow text-foam/50">
                Aquarium · Est. 1992 · 09°56'N · CR
              </p>
              <p className="mt-2 text-pretty text-sm text-foam/65 leading-relaxed">
                Un instituto vivo dedicado a la conservación marina y la
                divulgación científica del océano profundo.
              </p>
            </div>
          </div>

          {/* Nav links — columna vertical apretada a la derecha */}
          <div className="md:text-right">
            <p className="text-[10px] uppercase tracking-eyebrow text-foam/45">
              Recorrer
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-foam/80 transition-colors duration-500 hover:text-lagoon"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar legal */}
        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 border-t border-foam/10 pt-5 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-eyebrow text-foam/45">
            © {new Date().getFullYear()} · Acuario · Paseo Marítimo 1492 · San
            José
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-eyebrow text-foam/55">
            {meta.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

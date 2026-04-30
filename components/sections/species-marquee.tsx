"use client";

import Image from "next/image";
import { species } from "@/lib/data";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function SpeciesMarquee() {
  const reel = [...species, ...species];
  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.6fr,1fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow tone="kelp">Capítulo 03 · Habitantes</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-[11px] uppercase tracking-eyebrow text-foam/45">
                1.247 especies bajo cuidado
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <h2 className="text-balance font-display text-4xl font-medium leading-[1.0] tracking-tight md:text-6xl">
              Cada criatura tiene un nombre,{" "}
              <span className="font-editorial italic font-light text-foam/80">
                una historia
              </span>{" "}
              y un protocolo de cuidado propio.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-20">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-abyss to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-abyss to-transparent" />
        <div className="flex animate-marquee will-change-transform">
          {reel.map((sp, i) => (
            <article
              key={`${sp.slug}-${i}`}
              className="group relative mr-5 flex w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-squircle-sm p-1.5 glass-shell"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1.25rem-0.375rem)] bg-tide">
                <Image
                  src={sp.image}
                  alt={sp.common}
                  fill
                  sizes="280px"
                  quality={92}
                  style={{ objectPosition: sp.imagePosition ?? "center 38%" }}
                  className="object-cover saturate-[0.95] transition-transform duration-[1200ms] ease-fluid group-hover:scale-105"
                />
                {/* tinte cohesionador — funde paleta dispar al lenguaje del proyecto */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-abyss/15 via-transparent to-abyss/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/95 via-abyss/40 to-transparent" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-eyebrow ring-1 backdrop-blur-md ${
                    statusTone(sp.status)
                  }`}
                >
                  {sp.status}
                </span>
                <div className="absolute inset-x-3 bottom-3">
                  <p className="text-[10px] uppercase tracking-eyebrow text-foam/60">
                    {sp.scientific}
                  </p>
                  <h3 className="mt-1 font-display text-lg leading-tight tracking-tight">
                    {sp.common}
                  </h3>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-2 px-3 py-3 text-[10px] uppercase tracking-eyebrow text-foam/55">
                <div>
                  <dt className="opacity-60">Hábitat</dt>
                  <dd className="mt-1 text-[11px] text-foam/85 normal-case tracking-normal font-sans">
                    {sp.habitat}
                  </dd>
                </div>
                <div>
                  <dt className="opacity-60">Profundidad</dt>
                  <dd className="mt-1 text-[11px] text-foam/85 normal-case tracking-normal font-sans">
                    {sp.depth}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function statusTone(status: string) {
  switch (status) {
    case "Estable":
      return "bg-kelp/20 text-bioluminescent ring-kelp/30";
    case "Vulnerable":
      return "bg-coral/15 text-coral ring-coral/30";
    case "En peligro":
      return "bg-coral/25 text-coral ring-coral/40";
    case "Crítico":
      return "bg-coral/35 text-foam ring-coral/60";
    default:
      return "bg-foam/10 text-foam ring-foam/15";
  }
}

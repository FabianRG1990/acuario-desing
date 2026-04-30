import Image from "next/image";
import { conservationStats } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillButton } from "@/components/ui/pill-button";

export function Conservation() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Cabecera — patrón unificado con Featured Exhibits */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Capítulo 03 · Conservación"
            title="Cuidar lo que se ama."
            italic="Estudiar lo que apenas conocemos."
            description="El 38% de cada entrada financia investigación pública, programas de rehabilitación y restauración de hábitats críticos. Nuestro trabajo se publica abierto para que cualquier instituto pueda construir sobre él."
            tone="lagoon"
            className="max-w-2xl"
          />
          <Reveal delay={0.2}>
            <PillButton href="/conservacion">Conoce el instituto</PillButton>
          </Reveal>
        </div>

        {/* Grid editorial: imagen + stats tipográficos */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:gap-14">
          {/* Programa destacado */}
          <Reveal>
            <div className="rounded-squircle p-2 glass-shell">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.5rem)] bg-tide">
                <Image
                  src="/conservacion/lab-coralino.png"
                  alt="Cultivo de coral en laboratorio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  quality={92}
                  className="object-cover saturate-[0.92]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-abyss/15 via-transparent to-abyss/35 mix-blend-multiply" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent" />

                {/* Telemetría superior */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-abyss/55 px-3 py-1 text-[10px] uppercase tracking-eyebrow text-foam ring-1 ring-foam/15 backdrop-blur-md">
                  <span className="size-1.5 animate-pulse rounded-full bg-bioluminescent shadow-[0_0_8px_2px_rgba(127,227,214,0.5)]" />
                  Lab Coralino · Activo
                </div>

                {/* Caption editorial inferior */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-eyebrow text-foam/55">
                      Programa · PR-01
                    </p>
                    <p className="mt-2 font-display text-lg leading-tight tracking-tight text-foam md:text-xl">
                      Reefscape · cultivo y reintroducción
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-eyebrow text-foam/50">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats tipográficos — sin card, lectura editorial directa */}
          <div className="flex flex-col justify-between">
            <Reveal>
              <div className="flex items-baseline justify-between border-b border-foam/10 pb-4">
                <span className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                  Impacto · 2025
                </span>
                <span className="text-[10px] uppercase tracking-eyebrow text-foam/30">
                  04 datos vivos
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10">
                {conservationStats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-[10px] uppercase tracking-eyebrow text-foam/55">
                      {s.label}
                    </dt>
                    <dd className="mt-3 font-display text-3xl leading-none tracking-tight text-foam md:text-[42px]">
                      {s.value}
                    </dd>
                    {s.suffix && (
                      <p className="mt-2 text-foam/45 text-sm leading-snug">
                        {s.suffix.trim()}
                      </p>
                    )}
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-12 border-t border-foam/10 pt-6 text-pretty text-foam/65 leading-relaxed">
                Cuatro programas activos en el Caribe, el Pacífico y el Mar
                Antártico. Datos abiertos bajo licencia{" "}
                <span className="font-editorial italic text-foam/85">
                  CC-BY
                </span>{" "}
                — para que la ciencia sea de todos.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

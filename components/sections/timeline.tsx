import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

const milestones = [
  { year: "1992", body: "Fundación del instituto. Primer tanque de manglar." },
  { year: "2003", body: "Programa de rehabilitación de tortugas marinas." },
  { year: "2011", body: "Apertura del Túnel Azul · 60 m de inmersión." },
  { year: "2018", body: "Laboratorio coralino. Primeras cepas reintroducidas." },
  { year: "2024", body: "Galería Abismo Pacífico · 1.840 m simulados." },
  { year: "2026", body: "Reserva marina propia · 38.420 ha protegidas." },
];

export function Timeline({
  className = "py-32 lg:py-40",
}: {
  className?: string;
}) {
  return (
    <section className={`relative ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Línea de tiempo</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.0] tracking-tight text-foam md:text-6xl">
                Treinta y cuatro años{" "}
                <span className="font-editorial italic font-light text-foam/75">
                  de oficio.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="text-[10px] uppercase tracking-eyebrow text-foam/40">
              06 hitos · 1992 — 2026
            </span>
          </Reveal>
        </div>
        <ol className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={0.04 * i}>
              <li className="border-t border-foam/10 pt-6">
                <div className="flex items-center gap-3">
                  <p className="font-display text-4xl leading-none tracking-tight text-foam md:text-5xl">
                    {m.year}
                  </p>
                  <span className="text-[10px] uppercase tracking-eyebrow text-foam/35">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-4 max-w-[38ch] text-pretty text-foam/65 leading-relaxed">
                  {m.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

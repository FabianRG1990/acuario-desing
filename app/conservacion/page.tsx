import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { DepthTransition } from "@/components/sections/depth-transition";
import { Reveal } from "@/components/ui/reveal";
import { conservationStats } from "@/lib/data";

const programs = [
  {
    code: "PR-01",
    title: "Reefscape · Cultivo de coral",
    region: "Caribe · Tela, Honduras",
    body: "Cultivamos 38 cepas de coral en laboratorio para repoblar arrecifes degradados. En 2025 reintroducimos 12.400 colonias.",
    image: "https://picsum.photos/seed/acuario-pr1/1200/900",
  },
  {
    code: "PR-02",
    title: "Tortuga Verde · Rehabilitación",
    region: "Pacífico · Guanacaste",
    body: "Recibimos tortugas heridas por colisiones, redes fantasma y ingesta de plásticos. 2.612 ejemplares devueltos al mar desde 2003.",
    image: "https://picsum.photos/seed/acuario-pr2/1200/900",
  },
  {
    code: "PR-03",
    title: "Bioluminiscencia · Investigación",
    region: "Mar abierto · 1.200 m",
    body: "Cinco expediciones anuales para estudiar comunidades abisales. Todos los datasets se publican abiertos bajo licencia CC-BY.",
    image: "https://picsum.photos/seed/acuario-pr3/1200/900",
  },
  {
    code: "PR-04",
    title: "Educación pública",
    region: "Toda Centroamérica",
    body: "84 escuelas en programa anual. Cada estudiante visita el instituto al menos una vez sin costo durante el ciclo lectivo.",
    image: "https://picsum.photos/seed/acuario-pr4/1200/900",
  },
];

const milestones = [
  { year: "1992", body: "Fundación del instituto. Primer tanque de manglar." },
  { year: "2003", body: "Programa de rehabilitación de tortugas marinas." },
  { year: "2011", body: "Apertura del Túnel Azul · 60 m de inmersión." },
  { year: "2018", body: "Laboratorio coralino. Primeras cepas reintroducidas." },
  { year: "2024", body: "Galería Abismo Pacífico · 1.840 m simulados." },
  { year: "2026", body: "Reserva marina propia · 38.420 ha protegidas." },
];

export default function ConservacionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Instituto · Misión pública"
        capitulo="Capítulo 03 / 05 · Conservación"
        title="Cuidar lo que se ama."
        italic="Estudiar lo que apenas conocemos."
        description="Acuario no es un parque temático: es un instituto activo de investigación marina. El 38% de cada entrada financia programas que mantenemos abiertos al mundo."
      />
      <DepthTransition />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-10 border-y border-foam/10 py-14 md:grid-cols-4">
            {conservationStats.map((s) => (
              <Reveal key={s.label}>
                <div>
                  <p className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                    {s.label}
                  </p>
                  <p className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                    {s.value}
                    <span className="block text-[18px] text-foam/55 font-sans tracking-normal mt-1">
                      {s.suffix.trim()}
                    </span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="max-w-3xl text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Cuatro programas activos.{" "}
              <span className="font-editorial italic font-light text-foam/80">
                Una misma corriente.
              </span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.code} delay={0.05 * i}>
                <article className="group h-full overflow-hidden rounded-squircle p-2 glass-shell glass-shell-hover">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.5rem)]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-fluid group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-foam/[0.08] px-3 py-1 text-[10px] uppercase tracking-eyebrow text-foam ring-1 ring-foam/15 backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-bioluminescent animate-pulse" />
                      {p.code}
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-[10px] uppercase tracking-eyebrow text-lagoon">
                      {p.region}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-pretty text-foam/70 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/5 px-3 py-1 text-[10px] uppercase tracking-eyebrow text-coral">
                  <span className="size-1.5 rounded-full bg-current opacity-80" />
                  Línea de tiempo
                </span>
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
    </>
  );
}

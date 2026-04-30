import Image from "next/image";
import { species, conservationStats } from "@/lib/data";
import { PageHeader } from "@/components/ui/page-header";
import { DepthTransition } from "@/components/sections/depth-transition";
import { Reveal } from "@/components/ui/reveal";

const statusTones: Record<string, string> = {
  Estable: "bg-kelp/20 text-bioluminescent ring-kelp/30",
  Vulnerable: "bg-coral/15 text-coral ring-coral/30",
  "En peligro": "bg-coral/25 text-coral ring-coral/40",
  Crítico: "bg-coral/40 text-foam ring-coral/60",
};

const filters = ["Todas", "Pelágicas", "Bentónicas", "Abisales", "Costeras"];

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

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galería · 1.247 especies"
        capitulo="Capítulo 02 / 04 · Galería + Conservación"
        title="Cada habitante,"
        italic="un protocolo propio."
        description="Llevamos un registro vivo de cada criatura: hábitat, dieta, profundidad y estado de conservación. Y abajo, los programas que mantenemos abiertos al mundo para protegerlas."
      />
      <DepthTransition />

      {/* ──── SECCIÓN 1: Catálogo de especies ──── */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 border-b border-foam/10 pb-8">
            <span className="text-[10px] uppercase tracking-eyebrow text-foam/45">
              Filtrar por hábitat
            </span>
            <div className="flex flex-wrap gap-2">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-eyebrow transition-colors duration-500 ${
                    i === 0
                      ? "glass-bubble text-foam"
                      : "border border-foam/15 text-foam/70 hover:border-foam/30 hover:text-foam"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-3 text-[10px] uppercase tracking-eyebrow text-foam/45">
              <span className="size-1.5 animate-pulse rounded-full bg-bioluminescent" />
              Catálogo actualizado · Hoy 06:14
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {species.map((sp, i) => (
              <Reveal key={sp.slug} delay={0.03 * i}>
                <article className="group h-full overflow-hidden rounded-squircle-sm p-1.5 glass-shell glass-shell-hover">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(1.25rem-0.375rem)] bg-tide">
                    <Image
                      src={sp.image}
                      alt={sp.common}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={92}
                      style={{ objectPosition: sp.imagePosition ?? "center 38%" }}
                      className="object-cover saturate-[0.95] transition-transform duration-[1400ms] ease-fluid group-hover:scale-[1.06]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-abyss/15 via-transparent to-abyss/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-transparent" />
                    <span
                      className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-eyebrow ring-1 backdrop-blur-md ${
                        statusTones[sp.status] ?? "bg-foam/10 text-foam"
                      }`}
                    >
                      <span className="size-1 rounded-full bg-current" />
                      {sp.status}
                    </span>
                    <div className="absolute inset-x-3 bottom-3">
                      <p className="text-[10px] uppercase tracking-eyebrow text-foam/55">
                        {sp.scientific}
                      </p>
                      <h3 className="mt-1 font-display text-xl leading-tight tracking-tight">
                        {sp.common}
                      </h3>
                    </div>
                  </div>
                  <dl className="grid grid-cols-2 gap-y-3 px-3 py-4">
                    <div>
                      <dt className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                        Hábitat
                      </dt>
                      <dd className="mt-1 text-[13px] text-foam/85">
                        {sp.habitat}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                        Profundidad
                      </dt>
                      <dd className="mt-1 text-[13px] text-foam/85">
                        {sp.depth}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                        Dieta
                      </dt>
                      <dd className="mt-1 text-[13px] text-foam/85">
                        {sp.diet}
                      </dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SECCIÓN 2: Transición editorial — bridge a Conservación ──── */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-foam/10 pt-16 lg:pt-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-lagoon/30 bg-lagoon/5 px-3 py-1 text-[10px] uppercase tracking-eyebrow text-lagoon">
                <span className="size-1.5 rounded-full bg-current opacity-80" />
                Conservación · Misión pública
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Cuidar lo que se ama.{" "}
                <span className="font-editorial italic font-light text-foam/80">
                  Estudiar lo que apenas conocemos.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[58ch] text-pretty text-foam/70 leading-relaxed md:text-lg">
                Acuario no es un parque temático: es un instituto activo de
                investigación marina. El 38% de cada entrada financia programas
                que mantenemos abiertos al mundo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──── SECCIÓN 3: Stats de impacto ──── */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-10 border-y border-foam/10 py-14 md:grid-cols-4">
            {conservationStats.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-eyebrow text-foam/90">
                    {s.label}
                  </p>
                  <p className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
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

      {/* ──── SECCIÓN 4: Programas activos ──── */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h3 className="max-w-3xl text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Cuatro programas activos.{" "}
              <span className="font-editorial italic font-light text-foam/80">
                Una misma corriente.
              </span>
            </h3>
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
                    <h4 className="mt-3 font-display text-2xl leading-tight tracking-tight md:text-3xl">
                      {p.title}
                    </h4>
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
    </>
  );
}

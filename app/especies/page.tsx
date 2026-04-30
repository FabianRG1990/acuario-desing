import Image from "next/image";
import { species } from "@/lib/data";
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

export default function EspeciesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Directorio · 1.247 especies"
        capitulo="Capítulo 03 / 06 · Especies"
        title="Cada habitante,"
        italic="un protocolo propio."
        description="Llevamos un registro vivo de cada criatura: hábitat, dieta, profundidad y estado de conservación. Este es un extracto público del catálogo curatorial."
      />
      <DepthTransition />

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
    </>
  );
}

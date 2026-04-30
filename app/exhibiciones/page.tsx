import Image from "next/image";
import { exhibits } from "@/lib/data";
import { PageHeader } from "@/components/ui/page-header";
import { DepthTransition } from "@/components/sections/depth-transition";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function ExhibicionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recorrido · 6 biomas"
        capitulo="Capítulo 02 / 06 · Exhibiciones"
        title="Galerías"
        italic="vivas."
        description="Cada bioma es un ecosistema completo, no una vitrina. Construidos con curaduría científica, presiones reales y luz natural, las exhibiciones se comportan como el océano que representan."
      />
      <DepthTransition />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {exhibits.map((ex, i) => (
              <Reveal key={ex.slug}>
                <article
                  className={`grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="rounded-squircle p-2 glass-shell">
                    <div className="relative aspect-[5/6] overflow-hidden rounded-[calc(2rem-0.5rem)] lg:aspect-[4/5]">
                      <Image
                        src={ex.image}
                        alt={ex.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-eyebrow text-lagoon">
                      {ex.zone} · {ex.depth}
                    </p>
                    <h2 className="mt-5 font-display text-4xl font-medium leading-[1.0] tracking-tight md:text-6xl">
                      {ex.name}
                    </h2>
                    <p className="mt-6 max-w-[58ch] text-pretty text-foam/70 leading-relaxed md:text-lg">
                      {ex.description}
                    </p>
                    <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-foam/10 pt-8">
                      <Stat label="Especies" value={`${ex.species}`} />
                      <Stat label="Capacidad" value={`${ex.liters} L`} />
                      <Stat
                        label="Número"
                        value={`0${i + 1}`}
                        accent="text-lagoon"
                      />
                    </dl>
                    <div className="mt-10">
                      <button className="group inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] glass-bubble">
                        <span className="py-1.5">Detalle curatorial</span>
                        <span className="flex size-8 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                          <ArrowUpRight weight="bold" size={12} />
                        </span>
                      </button>
                    </div>
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

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-eyebrow text-foam/45">
        {label}
      </dt>
      <dd
        className={`mt-2 font-display text-2xl tracking-tight ${
          accent ?? "text-foam"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

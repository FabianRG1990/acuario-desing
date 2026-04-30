import { tickets } from "@/lib/data";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Check, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Membership() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <Eyebrow tone="lagoon">Capítulo 06 · Patronato</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.0] tracking-tight md:text-6xl">
                Tres formas de entrar.{" "}
                <span className="font-editorial italic font-light text-foam/80">
                  Una sola comunidad.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <p className="max-w-md text-pretty text-foam/65 md:text-[18px]">
              Cada entrada financia el cuidado de los animales y los programas
              de conservación que mantenemos abiertos al mundo.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {tickets.map((t, i) => (
            <Reveal key={t.name} delay={0.05 * i}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-squircle p-2 glass-shell ${
                  t.highlight ? "ring-1 ring-lagoon/40" : ""
                }`}
              >
                <div className="flex h-full flex-col rounded-[calc(2rem-0.5rem)] p-7 glass-core">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl tracking-tight">
                      {t.name}
                    </h3>
                    {t.highlight && (
                      <span className="rounded-full bg-lagoon/20 px-2.5 py-1 text-[10px] uppercase tracking-eyebrow text-lagoon ring-1 ring-lagoon/30">
                        Recomendado
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-5xl tracking-tight text-foam">
                      {t.price}
                    </span>
                    <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                      {t.cadence}
                    </span>
                  </div>
                  <p className="mt-4 text-pretty text-foam/70 leading-relaxed">
                    {t.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-foam/10 pt-6">
                    {t.perks.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-foam/85"
                      >
                        <span
                          className={`mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full ${
                            t.highlight
                              ? "bg-lagoon/20 text-lagoon"
                              : "bg-foam/10 text-foam/85"
                          }`}
                        >
                          <Check weight="bold" size={11} />
                        </span>
                        <span className="text-[16px]">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link
                      href="/entradas"
                      className="group inline-flex w-full items-center justify-between rounded-full pl-5 pr-1.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] glass-bubble"
                    >
                      <span className="py-1.5">Elegir {t.name}</span>
                      <span className="flex size-8 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                        <ArrowUpRight weight="bold" size={12} />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

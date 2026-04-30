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
              <Eyebrow tone="lagoon">Capítulo 03 · Patronato</Eyebrow>
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
                  t.highlight
                    ? "ring-2 ring-lagoon/60 shadow-[0_0_60px_-12px_rgba(86,170,184,0.45)] lg:-translate-y-3 lg:scale-[1.03]"
                    : "lg:opacity-90"
                }`}
              >
                {t.highlight && (
                  <>
                    <div className="pointer-events-none absolute inset-0 rounded-squircle bg-gradient-to-b from-lagoon/[0.08] via-transparent to-lagoon/[0.04]" />
                    <div className="pointer-events-none absolute -inset-px rounded-squircle bg-gradient-to-b from-lagoon/30 via-transparent to-transparent opacity-50" />
                  </>
                )}
                <div className="relative flex h-full flex-col rounded-[calc(2rem-0.5rem)] p-7 glass-core">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className={`font-display text-xl tracking-tight ${t.highlight ? "text-foam" : ""}`}>
                      {t.name}
                    </h3>
                    {t.highlight && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-lagoon/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-eyebrow text-lagoon ring-1 ring-lagoon/50 shadow-[0_0_20px_-2px_rgba(86,170,184,0.5)]">
                        <span className="size-1.5 animate-pulse rounded-full bg-lagoon shadow-[0_0_8px_2px_rgba(86,170,184,0.6)]" />
                        Recomendado
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className={`font-display tracking-tight ${t.highlight ? "text-6xl text-lagoon" : "text-5xl text-foam"}`}>
                      {t.price}
                    </span>
                    <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                      {t.cadence}
                    </span>
                  </div>
                  <p className="mt-4 text-pretty text-foam/70 leading-relaxed">
                    {t.description}
                  </p>
                  <ul className={`mt-6 space-y-3 border-t pt-6 ${t.highlight ? "border-lagoon/20" : "border-foam/10"}`}>
                    {t.perks.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-foam/85"
                      >
                        <span
                          className={`mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full ${
                            t.highlight
                              ? "bg-lagoon/30 text-lagoon ring-1 ring-lagoon/40"
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
                      className={`group inline-flex w-full items-center justify-between rounded-full pl-5 pr-1.5 py-1.5 text-[13px] font-semibold tracking-[-0.01em] ${
                        t.highlight
                          ? "bg-lagoon text-abyss shadow-[0_8px_30px_-8px_rgba(86,170,184,0.6)] hover:shadow-[0_8px_40px_-6px_rgba(86,170,184,0.8)] transition-shadow duration-500"
                          : "glass-bubble"
                      }`}
                    >
                      <span className="py-1.5">Elegir {t.name}</span>
                      <span
                        className={`flex size-8 items-center justify-center rounded-full transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px] ${
                          t.highlight ? "bg-abyss/15 text-abyss" : "glass-bubble-icon"
                        }`}
                      >
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

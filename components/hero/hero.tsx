import Link from "next/link";
import { ArrowDown, ArrowUpRight, FishSimple } from "@phosphor-icons/react/dist/ssr";
import { HeroFishCanvas } from "./hero-fish-canvas";
import { BubbleStream } from "@/components/ui/bubble-stream";

/**
 * Hero (server component) — estructura preparada para alojar la animación del
 * pez siguiendo el mouse en HeroFishCanvas. El layout es estable: la copy y los
 * controles viven en una capa superior (z-10) y el canvas ocupa la capa inferior
 * (z-0, absolute inset-0) sin desplazarse al introducir la animación.
 */
export function Hero() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-mesh-deep">
      {/* SLOT animación pez — no editar layout, solo enchufar render */}
      <HeroFishCanvas />

      {/* Burbujas decorativas (capa 1) */}
      <BubbleStream count={18} className="z-[1] opacity-70" />

      {/* Cierre inferior — funde la base del hero al abismo puro para que la
          siguiente sección no muestre una costura horizontal. La capa cubre
          todo lo que pinta el canvas (ondas + caustics) en los últimos 180px. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-44"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(6, 24, 38, 0.55) 45%, #061826 100%)",
        }}
      />

      {/* Marco superior — eyebrow telemetría */}
      <div className="absolute left-0 right-0 top-28 z-10 mx-auto flex max-w-7xl items-start justify-between px-6 lg:top-32 lg:px-8">
        <div className="flex flex-col gap-2 text-[10px] uppercase tracking-eyebrow text-foam/55">
          <span>09°56'N · 84°08'W</span>
          <span className="hidden sm:inline">Profundidad media · 24 m</span>
        </div>
        <div className="hidden flex-col items-end gap-2 text-[10px] uppercase tracking-eyebrow text-foam/55 sm:flex">
          <span>Temperatura · 17.4 °C</span>
          <span>Salinidad · 34.7 PSU</span>
        </div>
      </div>

      {/* Capa principal */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-6 pb-20 pt-48 lg:px-8 lg:pb-32 lg:pt-56">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-foam/15 bg-foam/[0.04] px-3 py-1 text-[10px] uppercase tracking-eyebrow text-foam/80 backdrop-blur-md">
              <FishSimple weight="duotone" size={12} className="text-lagoon" />
              Temporada · Bioluminiscencia abisal
            </span>
            <h1 className="mt-8 max-w-[16ch] text-balance font-display text-[44px] font-medium leading-[0.92] tracking-tight text-foam md:text-[88px] lg:text-[112px]">
              Inmersión <br />
              <span className="font-editorial italic font-light text-foam/80">
                en lo
              </span>{" "}
              profundo.
            </h1>
            <p className="mt-8 max-w-[52ch] text-pretty text-foam/70 leading-relaxed md:text-lg">
              Acuario es un instituto vivo: 1.247 especies, seis biomas, una
              misión científica y un solo principio —que el océano deje de ser
              un lugar lejano para convertirse en una experiencia íntima.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/exhibiciones"
                className="group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 text-[14px] font-semibold tracking-[-0.01em] glass-bubble"
              >
                <span className="py-1.5">Recorrer exhibiciones</span>
                <span className="flex size-9 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                  <ArrowUpRight weight="bold" size={14} />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-squircle p-2 glass-shell">
              <div className="rounded-[calc(2rem-0.5rem)] p-6 glass-core">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-eyebrow text-foam/55">
                    Próxima ola
                  </p>
                  <span className="size-2 animate-pulse rounded-full bg-bioluminescent shadow-[0_0_12px_2px_rgba(127,227,214,0.6)]" />
                </div>
                <p className="mt-4 font-display text-3xl tracking-tight text-foam">
                  19:30
                </p>
                <p className="mt-1 text-foam/65">
                  Noche bioluminiscente · Galería Abismo Pacífico
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-foam/10 pt-5">
                  <Stat value="47" label="especies" />
                  <Stat value="2.4M" label="litros" />
                  <Stat value="1.84K" label="metros" />
                </div>
              </div>
            </div>
            <div className="hidden items-center justify-between text-foam/55 lg:flex">
              <ScrollHint />
              <div className="text-[10px] uppercase tracking-eyebrow">
                01 / 06
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-eyebrow text-foam/45">
        {label}
      </p>
      <p className="mt-1 font-display text-xl tracking-tight text-foam">
        {value}
      </p>
    </div>
  );
}

function ScrollHint() {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-eyebrow">
      <span className="flex size-8 items-center justify-center rounded-full ring-1 ring-foam/15 animate-drift">
        <ArrowDown size={11} />
      </span>
      Desciende
    </div>
  );
}

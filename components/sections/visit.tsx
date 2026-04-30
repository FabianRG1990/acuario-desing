import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { visitInfo } from "@/lib/data";
import { ArrowUpRight, MapPin, Clock, Ticket } from "@phosphor-icons/react/dist/ssr";

export function Visit() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>Capítulo 04 · Visita</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.0] tracking-tight md:text-6xl">
                Llegás cuando quieras.{" "}
                <span className="font-editorial italic font-light text-foam/80">
                  Te quedás cuanto necesites.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[52ch] text-pretty text-foam/70 leading-relaxed md:text-lg">
                {visitInfo.ticketingNote}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/entradas"
                  className="group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 text-[14px] font-semibold tracking-[-0.01em] glass-bubble"
                >
                  <span className="py-1.5">Comprar entradas</span>
                  <span className="flex size-9 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                    <ArrowUpRight weight="bold" size={14} />
                  </span>
                </Link>
                <Link
                  href="/visita"
                  className="group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 text-[14px] font-semibold tracking-[-0.01em] glass-bubble"
                >
                  <span className="py-1.5">Cómo llegar</span>
                  <span className="flex size-9 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                    <MapPin size={14} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal>
              <InfoRow
                icon={<Clock size={16} />}
                title="Horarios"
                helper="Reentrada el mismo día"
              >
                <ul className="mt-4 divide-y divide-foam/8 border-t border-foam/8">
                  {visitInfo.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex flex-col gap-1 py-3 md:flex-row md:items-baseline md:justify-between md:gap-6"
                    >
                      <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                        {h.day}
                      </span>
                      <span className="text-foam/90">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>
            </Reveal>

            <Reveal delay={0.1}>
              <InfoRow
                icon={<MapPin size={16} />}
                title="Ubicación"
                helper="A 12 min del centro"
              >
                <p className="mt-3 text-foam/85">{visitInfo.address}</p>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-foam/8 pt-5 text-[10px] uppercase tracking-eyebrow text-foam/55">
                  <div>
                    <p>Tren</p>
                    <p className="mt-1 text-foam/85 normal-case tracking-normal font-sans text-sm">
                      Línea Costa
                    </p>
                  </div>
                  <div>
                    <p>Bus</p>
                    <p className="mt-1 text-foam/85 normal-case tracking-normal font-sans text-sm">
                      14 · 22 · 81
                    </p>
                  </div>
                  <div>
                    <p>Bici</p>
                    <p className="mt-1 text-foam/85 normal-case tracking-normal font-sans text-sm">
                      6 estaciones
                    </p>
                  </div>
                </div>
              </InfoRow>
            </Reveal>

            <Reveal delay={0.16}>
              <InfoRow
                icon={<Ticket size={16} />}
                title="Entrada general"
                helper="Capacidad limitada"
              >
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-display text-4xl tracking-tight">
                    $28
                  </span>
                  <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                    por persona
                  </span>
                </div>
                <p className="mt-3 text-foam/65">
                  Niños menores de 6 años entran libres. Estudiantes con carné
                  vigente: $14.
                </p>
              </InfoRow>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  helper,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-squircle p-2 glass-shell">
      <div className="rounded-[calc(2rem-0.5rem)] p-7 glass-core">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-foam/[0.06] text-lagoon ring-1 ring-foam/10">
              {icon}
            </span>
            <h3 className="font-display text-xl tracking-tight">{title}</h3>
          </div>
          {helper && (
            <span className="text-[10px] uppercase tracking-eyebrow text-foam/45">
              {helper}
            </span>
          )}
        </div>
        <div className="mt-2 pl-12">{children}</div>
      </div>
    </div>
  );
}

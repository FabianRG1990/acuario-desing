import { PageHeader } from "@/components/ui/page-header";
import { DepthTransition } from "@/components/sections/depth-transition";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowUpRight,
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";

const channels = [
  {
    icon: EnvelopeSimple,
    label: "Escríbenos",
    value: "hola@aquarium.cr",
    helper: "Respuesta promedio · 14 minutos",
    href: "mailto:hola@aquarium.cr",
    accent: "lagoon",
  },
  {
    icon: Phone,
    label: "Llámanos",
    value: "+506 2287 1992",
    helper: "Lunes a domingo · 08:00 — 21:00",
    href: "tel:+50622871992",
    accent: "bioluminescent",
  },
  {
    icon: MapPin,
    label: "Visítanos",
    value: "Paseo Marítimo 1492",
    helper: "San José · 09°56'N · 84°08'W",
    href: "#mapa",
    accent: "kelp",
  },
];

const accentMap: Record<string, string> = {
  lagoon: "text-lagoon ring-lagoon/30 bg-lagoon/8",
  bioluminescent:
    "text-bioluminescent ring-bioluminescent/30 bg-bioluminescent/8",
  kelp: "text-bioluminescent ring-kelp/30 bg-kelp/12",
};

const departments = [
  {
    code: "DEP-01",
    title: "Reservas y entradas",
    body: "Olas, grupos, escuelas y eventos privados.",
    contact: "reservas@aquarium.cr",
  },
  {
    code: "DEP-02",
    title: "Prensa y comunicación",
    body: "Solicitudes editoriales, fotografía profesional, entrevistas.",
    contact: "prensa@aquarium.cr",
  },
  {
    code: "DEP-03",
    title: "Investigación y datos",
    body: "Acceso a publicaciones, datasets abiertos y colaboraciones científicas.",
    contact: "ciencia@aquarium.cr",
  },
  {
    code: "DEP-04",
    title: "Patronato y donaciones",
    body: "Membresías fundadoras, financiamiento de programas y reservas marinas.",
    contact: "patronato@aquarium.cr",
  },
];

const hours = [
  { day: "Lunes — Jueves", hours: "10:00 — 19:30" },
  { day: "Viernes", hours: "10:00 — 22:00 · Noche bioluminiscente" },
  { day: "Sábado — Domingo", hours: "09:00 — 21:00" },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto · Estamos aquí"
        capitulo="Capítulo 04 / 04 · Contáctenos"
        title="Hablemos."
        italic="El océano nos une."
        description="Tres formas de llegar al instituto, una sola misión: que cualquier persona —investigadora, visitante, prensa, escuela— pueda encontrarnos sin fricción."
      />
      <DepthTransition />

      {/* ──── SECCIÓN 1: Tres canales principales ──── */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label} delay={0.05 * i}>
                  <a
                    href={c.href}
                    className="group relative flex h-full flex-col rounded-squircle p-2 glass-shell glass-shell-hover"
                  >
                    <div className="flex h-full flex-col rounded-[calc(2rem-0.5rem)] p-7 glass-core">
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex size-12 items-center justify-center rounded-full ring-1 backdrop-blur-md ${accentMap[c.accent]}`}
                        >
                          <Icon size={20} weight="duotone" />
                        </span>
                        <ArrowUpRight
                          weight="bold"
                          size={14}
                          className="text-foam/40 transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-foam/80"
                        />
                      </div>
                      <p className="mt-8 text-[10px] uppercase tracking-eyebrow text-foam/45">
                        {c.label}
                      </p>
                      <p className="mt-3 font-display text-2xl leading-tight tracking-tight text-foam md:text-3xl">
                        {c.value}
                      </p>
                      <p className="mt-auto pt-6 text-sm text-foam/60">
                        {c.helper}
                      </p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──── SECCIÓN 2: Form + Horarios ──── */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:gap-16">
            {/* Formulario editorial */}
            <Reveal>
              <div className="rounded-squircle p-2 glass-shell">
                <div className="rounded-[calc(2rem-0.5rem)] p-8 glass-core lg:p-10">
                  <p className="text-[10px] uppercase tracking-eyebrow text-lagoon">
                    Mensaje directo
                  </p>
                  <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-4xl">
                    Contanos qué necesitás.{" "}
                    <span className="font-editorial italic font-light text-foam/80">
                      Te leemos pronto.
                    </span>
                  </h2>

                  <form className="mt-10 grid gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field label="Nombre" name="name" placeholder="Tu nombre" />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="tu@correo.com"
                      />
                    </div>
                    <Field
                      label="Asunto"
                      name="subject"
                      placeholder="¿De qué nos querés hablar?"
                    />
                    <Field
                      label="Mensaje"
                      name="message"
                      as="textarea"
                      placeholder="Escribinos lo que necesités. Sin formalidades."
                    />

                    <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-foam/10 pt-6">
                      <p className="max-w-[44ch] text-[12px] text-foam/55 leading-relaxed">
                        Al enviar, aceptás nuestra política de privacidad. No
                        compartimos correos ni los usamos para marketing
                        externo.
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 text-[14px] font-semibold tracking-[-0.01em] glass-bubble"
                      >
                        <span className="py-1.5">Enviar mensaje</span>
                        <span className="flex size-9 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                          <PaperPlaneTilt weight="bold" size={14} />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Reveal>

            {/* Sidebar — Horarios + tiempo de respuesta */}
            <Reveal delay={0.1}>
              <div className="space-y-5">
                <div className="rounded-squircle p-2 glass-shell">
                  <div className="rounded-[calc(2rem-0.5rem)] p-7 glass-core">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-foam/[0.06] text-lagoon ring-1 ring-foam/10">
                        <Clock size={16} weight="duotone" />
                      </span>
                      <h3 className="font-display text-xl tracking-tight">
                        Horarios de atención
                      </h3>
                    </div>
                    <ul className="mt-5 divide-y divide-foam/8 border-t border-foam/8">
                      {hours.map((h) => (
                        <li
                          key={h.day}
                          className="flex flex-col gap-1 py-3 md:flex-row md:items-baseline md:justify-between md:gap-4"
                        >
                          <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                            {h.day}
                          </span>
                          <span className="text-foam/90">{h.hours}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-[10px] uppercase tracking-eyebrow text-foam/45">
                      Última admisión 60 min antes del cierre
                    </p>
                  </div>
                </div>

                <div className="rounded-squircle p-2 glass-shell">
                  <div className="rounded-[calc(2rem-0.5rem)] p-7 glass-core">
                    <p className="text-[10px] uppercase tracking-eyebrow text-bioluminescent">
                      Tiempo de respuesta
                    </p>
                    <p className="mt-4 font-display text-5xl leading-none tracking-tight text-foam">
                      14<span className="text-foam/45 text-3xl ml-1">min</span>
                    </p>
                    <p className="mt-3 text-foam/65 leading-relaxed text-sm">
                      Mediana de respuesta de nuestro equipo humano —no bots—
                      durante el horario de atención.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──── SECCIÓN 3: Departamentos especializados ──── */}
      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-foam/10 pt-16 lg:pt-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-lagoon/30 bg-lagoon/5 px-3 py-1 text-[10px] uppercase tracking-eyebrow text-lagoon">
                <span className="size-1.5 rounded-full bg-current opacity-80" />
                Equipos especializados
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
                Cuatro equipos.{" "}
                <span className="font-editorial italic font-light text-foam/80">
                  Cada uno con su correo directo.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[52ch] text-pretty text-foam/65 leading-relaxed">
                Si sabés exactamente con quién hablar, escribinos directo al
                equipo correspondiente. Las respuestas son más rápidas.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {departments.map((d, i) => (
              <Reveal key={d.code} delay={0.05 * i}>
                <a
                  href={`mailto:${d.contact}`}
                  className="group block rounded-squircle p-2 glass-shell glass-shell-hover"
                >
                  <div className="rounded-[calc(2rem-0.5rem)] p-7 glass-core">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                        {d.code}
                      </p>
                      <ArrowUpRight
                        weight="bold"
                        size={14}
                        className="text-foam/40 transition-all duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-foam/80"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight">
                      {d.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-foam/65 leading-relaxed">
                      {d.body}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 border-t border-foam/10 pt-4 text-sm text-lagoon transition-colors duration-500 group-hover:text-bioluminescent">
                      {d.contact}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SECCIÓN 4: Mapa + dirección ──── */}
      <section id="mapa" className="relative pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-squircle p-2 glass-shell">
            <div className="grid gap-10 rounded-[calc(2rem-0.5rem)] p-8 glass-core lg:grid-cols-[1fr,1.2fr] lg:gap-14 lg:p-10">
              <Reveal>
                <div className="flex h-full flex-col">
                  <p className="text-[10px] uppercase tracking-eyebrow text-lagoon">
                    Cómo llegar
                  </p>
                  <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-4xl">
                    Paseo Marítimo 1492.{" "}
                    <span className="font-editorial italic font-light text-foam/80">
                      A 12 minutos del centro.
                    </span>
                  </h2>
                  <ul className="mt-8 grid gap-4 text-sm">
                    <li className="flex items-baseline justify-between gap-4 border-b border-foam/8 pb-3">
                      <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                        Tren
                      </span>
                      <span className="text-foam/90">
                        Línea Costa · estación Marítimo
                      </span>
                    </li>
                    <li className="flex items-baseline justify-between gap-4 border-b border-foam/8 pb-3">
                      <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                        Bus
                      </span>
                      <span className="text-foam/90">14 · 22 · 81</span>
                    </li>
                    <li className="flex items-baseline justify-between gap-4 border-b border-foam/8 pb-3">
                      <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                        Bici
                      </span>
                      <span className="text-foam/90">6 estaciones a 400 m</span>
                    </li>
                    <li className="flex items-baseline justify-between gap-4">
                      <span className="text-[11px] uppercase tracking-eyebrow text-foam/55">
                        Auto
                      </span>
                      <span className="text-foam/90">
                        2.150 plazas subterráneas
                      </span>
                    </li>
                  </ul>
                  <p className="mt-auto pt-8 text-[10px] uppercase tracking-eyebrow text-foam/40">
                    09°56'N · 84°08'W · San José, Costa Rica
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="aspect-[4/3] overflow-hidden rounded-squircle-sm bg-tide ring-1 ring-foam/10 lg:aspect-auto lg:h-full">
                  <MapStatic />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea";
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-eyebrow text-foam/55">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={5}
          placeholder={placeholder}
          className="mt-3 w-full resize-none rounded-2xl border border-foam/10 bg-foam/[0.03] px-4 py-3 text-foam placeholder:text-foam/30 outline-none transition-colors duration-500 focus:border-lagoon/50 focus:bg-foam/[0.05]"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="mt-3 w-full rounded-full border border-foam/10 bg-foam/[0.03] px-5 py-3 text-foam placeholder:text-foam/30 outline-none transition-colors duration-500 focus:border-lagoon/50 focus:bg-foam/[0.05]"
        />
      )}
    </label>
  );
}

function MapStatic() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="g1" cx="62%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#5EC4D1" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#103349" stopOpacity="0" />
        </radialGradient>
        <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path
            d="M36 0H0V36"
            fill="none"
            stroke="#F5F1E8"
            strokeOpacity="0.05"
          />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="#0B2235" />
      <rect width="800" height="600" fill="url(#grid)" />
      <rect width="800" height="600" fill="url(#g1)" />
      {/* Coastline */}
      <path
        d="M0,400 Q200,330 420,380 T800,360 L800,600 L0,600 Z"
        fill="#5EC4D1"
        fillOpacity="0.10"
      />
      <path
        d="M0,440 Q220,370 440,410 T800,390"
        fill="none"
        stroke="#5EC4D1"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      {/* Marker */}
      <circle cx="500" cy="300" r="9" fill="#F5F1E8" />
      <circle
        cx="500"
        cy="300"
        r="22"
        fill="none"
        stroke="#F5F1E8"
        strokeOpacity="0.5"
      />
      <circle
        cx="500"
        cy="300"
        r="44"
        fill="none"
        stroke="#F5F1E8"
        strokeOpacity="0.20"
      />
      <circle
        cx="500"
        cy="300"
        r="68"
        fill="none"
        stroke="#5EC4D1"
        strokeOpacity="0.15"
      />
      <text
        x="525"
        y="284"
        fill="#F5F1E8"
        fontFamily="monospace"
        fontSize="11"
        letterSpacing="3"
        opacity="0.72"
      >
        ACUARIO
      </text>
      <text
        x="525"
        y="302"
        fill="#F5F1E8"
        fontFamily="monospace"
        fontSize="9"
        letterSpacing="2"
        opacity="0.45"
      >
        09°56'N · 84°08'W
      </text>
    </svg>
  );
}

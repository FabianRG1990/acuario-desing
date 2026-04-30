import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";

export function Intro() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.78fr,1fr] lg:items-start lg:gap-20">
          {/* ──────────────────────────────────────────────────────────────
              COLUMNA IZQUIERDA — artefacto visual + pull-quote.
              Sticky en lg para acompañar la lectura del manifiesto sin que
              el lector pierda el ancla emocional.
              ────────────────────────────────────────────────────────────── */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>Capítulo 01 · Manifiesto</Eyebrow>
            </Reveal>

            {/* Hero visual — el haz de luz, la manta, la tortuga.
                Tratamiento glass-shell con telemetría editorial. */}
            <Reveal delay={0.1}>
              <figure className="group relative mt-8 rounded-squircle p-2 glass-shell glass-shell-hover">
                <div className="relative aspect-[2/3] overflow-hidden rounded-[calc(2rem-0.5rem)] bg-tide">
                  <Image
                    src="/intro/manta-tortuga.jpg"
                    alt="Manta gigante y tortuga verde ascendiendo bajo un haz de luz solar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    quality={92}
                    priority
                    className="object-cover transition-transform duration-[1600ms] ease-fluid group-hover:scale-[1.03]"
                  />

                  {/* Velo profundidad + cohesión cromática */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-abyss/15 via-transparent to-abyss/55 mix-blend-multiply" />

                  {/* Halo cyan superior — refuerza el haz natural de la foto */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(127,227,214,0.18) 0%, transparent 70%)",
                      mixBlendMode: "screen",
                    }}
                  />

                  {/* Hairline — borde de cristal */}
                  <div className="pointer-events-none absolute inset-0 hairline rounded-[calc(2rem-0.5rem)]" />

                  {/* Telemetría — coordenadas del encuentro */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-abyss/55 px-3 py-1 text-[10px] uppercase tracking-eyebrow text-foam ring-1 ring-foam/15 backdrop-blur-md">
                    <span className="size-1.5 animate-pulse rounded-full bg-bioluminescent shadow-[0_0_8px_2px_rgba(127,227,214,0.55)]" />
                    Mar abierto · 09°56'N
                  </div>

                  {/* Marca editorial — "placa" tipo lámina de bitácora */}
                  <span className="absolute right-5 top-5 text-[10px] uppercase tracking-eyebrow text-foam/55">
                    Lámina 01
                  </span>

                  {/* Caption inferior — convierte la foto en observación
                      científica, no en stock. */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-eyebrow text-foam/55">
                        Especies en encuadre
                      </p>
                      <p className="mt-2 font-display text-base leading-snug tracking-tight text-foam md:text-lg">
                        Mobula birostris · Chelonia mydas
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                      24 m
                    </span>
                  </div>
                </div>
              </figure>
            </Reveal>

            {/* Pull-quote — el anzuelo emocional. Italic Fraunces grande,
                con regla vertical editorial. Rima visual con el span italic
                del manifiesto al lado derecho. */}
            <Reveal delay={0.2}>
              <figcaption className="mt-10 max-w-[40ch] border-l border-foam/20 pl-6">
                <p className="font-editorial text-xl italic font-light leading-snug text-foam/80 md:text-2xl">
                  &ldquo;Y a veces, cuando los miramos sin prisa, devuelven la
                  mirada.&rdquo;
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-eyebrow text-foam/45">
                  Bitácora de campo · Pacífico tropical · 2024
                </p>
              </figcaption>
            </Reveal>
          </div>

          {/* ──────────────────────────────────────────────────────────────
              COLUMNA DERECHA — el manifiesto, en composición editorial:
              kicker → headline → deck → pilares → coda. Cada bloque
              respira y empuja al siguiente.
              ────────────────────────────────────────────────────────────── */}
          <div>
            {/* KICKER — frame the moment. Mono, pequeño, lagoon. */}
            <Reveal>
              <p className="text-[11px] uppercase tracking-eyebrow text-lagoon">
                Una declaración · Inst. 1992
              </p>
            </Reveal>

            {/* HEADLINE — dos líneas de tipo display rotundo, terminando
                en un span italic Fraunces que actúa como punto de fijación
                visual. El ojo se queda ahí. */}
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-[20ch] text-balance font-display text-[40px] font-medium leading-[1.02] md:text-[56px] lg:text-[64px]">
                Antes de que el océano sea una abstracción climática, queremos
                que vuelva a ser{" "}
                <span className="font-editorial italic font-light text-foam/85">
                  un lugar reconocible.
                </span>
              </h2>
            </Reveal>

            {/* DECK — el bloque de respiración. Tres frases sensoriales
                cortas, separadas por puntos. Voz íntima. */}
            <Reveal delay={0.16}>
              <p className="mt-10 max-w-[52ch] text-pretty text-foam/75 leading-relaxed md:text-lg">
                Una textura. Una temperatura. Una mirada que sostiene la tuya
                desde el otro lado del cristal. Eso es lo que un instituto vivo
                puede devolverle al océano: presencia.
              </p>
            </Reveal>

            {/* PILARES — la prueba. Tres columnas con tag + título + body.
                Border arriba para marcar transición de manifiesto a evidencia. */}
            <Reveal delay={0.24}>
              <div className="mt-14 grid gap-10 border-t border-foam/10 pt-10 md:grid-cols-3">
                {pillars.map((p) => (
                  <div key={p.title}>
                    <p className="text-[10px] uppercase tracking-eyebrow text-lagoon">
                      {p.tag}
                    </p>
                    <h3 className="mt-4 font-display text-xl tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[36ch] text-pretty text-foam/65 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CODA — la firma. Italic pequeño, intimo, cierra el círculo
                editorial. Recompensa al lector que terminó el bloque. */}
            <Reveal delay={0.32}>
              <p className="mt-14 border-t border-foam/10 pt-6 font-editorial italic text-foam/55">
                — Aquarium · Instituto vivo · 1992 — Hoy.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    tag: "Curaduría",
    title: "Seis biomas vivos",
    body: "Cada galería es un ecosistema completo. Reproducimos corrientes, presiones y luz para que las especies vivan, no solo se exhiban.",
  },
  {
    tag: "Ciencia",
    title: "Investigación abierta",
    body: "94 publicaciones revisadas por pares en una década. Nuestro laboratorio de coral cultiva especies amenazadas para repoblación.",
  },
  {
    tag: "Cuidado",
    title: "Bienestar primero",
    body: "Protocolos de enriquecimiento ambiental, alimentación natural y rehabilitación. Ningún animal es entrenado para espectáculo.",
  },
];

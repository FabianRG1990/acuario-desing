import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { CausticBg } from "@/components/ui/caustic-bg";
import { BubbleStream } from "@/components/ui/bubble-stream";
import { EmblemStamp } from "@/components/ui/brand-mark";

export function PageHeader({
  eyebrow,
  title,
  italic,
  description,
  capitulo,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  capitulo: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-mesh-deep pb-20 pt-44 lg:pb-28 lg:pt-56">
      <CausticBg />
      <BubbleStream count={12} className="opacity-50" />

      {/* Cierre inferior — funde el header al abismo puro para que la
          siguiente sección entre sin costura horizontal. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-44"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(6, 24, 38, 0.55) 45%, #061826 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.45fr,1fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 text-[11px] uppercase tracking-eyebrow text-foam/45">
                {capitulo}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-12 hidden items-center gap-3 lg:flex">
                <EmblemStamp size={28} />
                <span className="text-[10px] uppercase tracking-eyebrow text-foam/40">
                  Aquarium · Inst. 1992
                </span>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h1 className="text-balance font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[96px]">
                {title}{" "}
                {italic && (
                  <span className="font-editorial italic font-light text-foam/80">
                    {italic}
                  </span>
                )}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={0.14}>
                <p className="mt-8 max-w-[60ch] text-pretty text-foam/70 leading-relaxed md:text-lg">
                  {description}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

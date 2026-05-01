import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { exhibits } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const accentMap: Record<string, string> = {
  lagoon: "bg-lagoon/15 text-lagoon ring-lagoon/30",
  bioluminescent: "bg-bioluminescent/15 text-bioluminescent ring-bioluminescent/30",
  coral: "bg-coral/15 text-coral ring-coral/30",
  kelp: "bg-kelp/20 text-bioluminescent ring-kelp/40",
};

export function FeaturedExhibits() {
  const featured = exhibits.slice(0, 5);
  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Capítulo 01 · Exhibiciones"
            title="Seis biomas."
            italic="Una sola caída."
            description="De la superficie tropical al frío antártico, cada galería ha sido construida con curaduría científica y sensibilidad escénica. Recorrelas en cualquier orden — o déjate llevar por la corriente sugerida."
            tone="lagoon"
            className="max-w-2xl"
          />
          <Reveal delay={0.2}>
            <Link
              href="/exhibiciones"
              className="group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 font-button text-[14px] font-semibold tracking-[-0.01em] glass-bubble"
            >
              <span className="py-1">Ver las 6 galerías</span>
              <span className="flex size-9 items-center justify-center rounded-full glass-bubble-icon transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                <ArrowUpRight weight="bold" size={14} />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Bento asimétrico */}
        <div className="mt-16 grid gap-5 md:grid-cols-12 md:grid-rows-[28rem_28rem]">
          {/* Big card */}
          <ExhibitCard
            exhibit={featured[0]}
            className="md:col-span-7 md:row-span-2"
            size="xl"
          />
          <ExhibitCard
            exhibit={featured[1]}
            className="md:col-span-5"
            size="md"
          />
          <ExhibitCard
            exhibit={featured[2]}
            className="md:col-span-5"
            size="md"
          />
          <ExhibitCard
            exhibit={featured[3]}
            className="md:col-span-7"
            size="lg"
          />
          <ExhibitCard
            exhibit={featured[4]}
            className="md:col-span-5"
            size="md"
          />
        </div>
      </div>
    </section>
  );
}

function ExhibitCard({
  exhibit,
  className = "",
  size,
}: {
  exhibit: (typeof exhibits)[number];
  className?: string;
  size: "md" | "lg" | "xl";
}) {
  const heightClass =
    size === "xl"
      ? "min-h-[28rem] md:min-h-full"
      : size === "lg"
        ? "min-h-[22rem]"
        : "min-h-[20rem]";
  return (
    <Reveal className={className}>
      <Link
        href={`/exhibiciones`}
        className={`group relative block h-full overflow-hidden rounded-squircle p-2 glass-shell glass-shell-hover ${heightClass}`}
      >
        <div className="relative h-full overflow-hidden rounded-[calc(2rem-0.5rem)]">
          <Image
            src={exhibit.image}
            alt={exhibit.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] ease-fluid group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-abyss/10" />
          <div className="absolute inset-0 hairline rounded-[calc(2rem-0.5rem)]" />

          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-eyebrow ring-1 backdrop-blur-md ${accentMap[exhibit.accent]}`}
            >
              <span className="size-1.5 rounded-full bg-current" />
              {exhibit.zone}
            </span>
            <span className="text-[10px] uppercase tracking-eyebrow text-foam/55">
              {exhibit.depth}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h3 className="font-display text-[26px] font-medium leading-tight tracking-tight text-foam md:text-[36px]">
                  {exhibit.name}
                </h3>
                <p className="mt-2 max-w-[40ch] text-pretty text-sm text-foam/75 md:text-[16px]">
                  {exhibit.description}
                </p>
              </div>
              <span className="hidden flex-shrink-0 size-10 items-center justify-center rounded-full bg-foam text-abyss transition-transform duration-700 ease-fluid group-hover:translate-x-[2px] group-hover:-translate-y-[2px] md:flex">
                <ArrowUpRight weight="bold" size={14} />
              </span>
            </div>
            <div className="mt-5 flex items-center gap-4 border-t border-foam/15 pt-3 text-[11px] uppercase tracking-eyebrow text-foam/55">
              <span>{exhibit.species} especies</span>
              <span className="size-1 rounded-full bg-foam/30" />
              <span>{exhibit.liters} L</span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

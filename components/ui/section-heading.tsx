import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  italic,
  description,
  align = "left",
  tone = "lagoon",
  className,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "lagoon" | "foam" | "coral" | "kelp";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[0.95] tracking-tight md:text-6xl">
          {title}{" "}
          {italic && (
            <span className="font-editorial italic font-light text-foam/85">
              {italic}
            </span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[58ch] text-pretty text-foam/70 leading-relaxed md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

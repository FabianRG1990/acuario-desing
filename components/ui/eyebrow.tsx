import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "lagoon",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "lagoon" | "foam" | "coral" | "kelp";
}) {
  const tones: Record<string, string> = {
    lagoon: "text-lagoon border-lagoon/30 bg-lagoon/5",
    foam: "text-foam/80 border-foam/15 bg-foam/[0.03]",
    coral: "text-coral border-coral/30 bg-coral/5",
    kelp: "text-bioluminescent border-bioluminescent/25 bg-bioluminescent/5",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] uppercase tracking-eyebrow",
        tones[tone],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
}

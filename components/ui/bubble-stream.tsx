export function BubbleStream({
  count = 14,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 137) % 100;
        const size = 4 + ((i * 11) % 12);
        const delay = (i * 0.7) % 9;
        const duration = 7 + ((i * 3) % 6);
        return (
          <span
            key={i}
            className="absolute bottom-[-10%] block rounded-full border border-foam/20 bg-foam/5 backdrop-blur-[1px] animate-rise"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}

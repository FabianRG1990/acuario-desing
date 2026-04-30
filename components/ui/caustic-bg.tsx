export function CausticBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -left-1/4 top-0 h-[60vh] w-[60vh] rounded-full bg-lagoon/15 blur-[120px] animate-caustic" />
      <div className="absolute right-0 top-1/3 h-[50vh] w-[50vh] rounded-full bg-bioluminescent/10 blur-[140px] animate-caustic [animation-delay:-7s]" />
      <div className="absolute bottom-0 left-1/3 h-[45vh] w-[45vh] rounded-full bg-kelp/15 blur-[120px] animate-caustic [animation-delay:-3s]" />
    </div>
  );
}

/**
 * DepthTransition
 * -----------------------------------------------------------------------------
 * Puente entre el hero y el manifiesto. Premisa: nada de banderas visibles ni
 * franjas de luz. La sección comparte el mismo abismo y simplemente deja
 * pasar partículas y rayos muy tenues por su zona media — los bordes superior
 * e inferior están enmascarados a abismo puro para que la unión sea invisible.
 *
 * Performance: solo transform/opacity en CSS puro, pointer-events-none.
 * -----------------------------------------------------------------------------
 */

const rays = [
  { left: "18%", angle: -2, dur: 17, delay: 0, alpha: 0.06 },
  { left: "42%", angle: 2, dur: 19, delay: -5, alpha: 0.05 },
  { left: "66%", angle: -1, dur: 16, delay: -8, alpha: 0.06 },
  { left: "85%", angle: 3, dur: 21, delay: -3, alpha: 0.04 },
];

const motes = Array.from({ length: 14 }, (_, i) => ({
  left: ((i * 137) % 100) + (i * 0.7) % 5,
  size: 1 + ((i * 7) % 3) * 0.5,
  dur: 16 + ((i * 3) % 9),
  delay: -((i * 1.7) % 14),
  blur: i % 3 === 0 ? 0.7 : 0.3,
}));

export function DepthTransition() {
  return (
    <section
      aria-hidden
      className="relative h-[22vh] min-h-[200px] w-full overflow-hidden"
    >
      {/* God rays — solo visibles en la franja media via las máscaras */}
      <div className="pointer-events-none absolute inset-0">
        {rays.map((r, i) => (
          <span
            key={i}
            className="absolute -top-[10%] block h-[120%] w-[160px] origin-top animate-godray"
            style={{
              left: r.left,
              background: `linear-gradient(180deg, transparent 0%, rgba(127, 227, 214, ${r.alpha * 0.4}) 30%, rgba(127, 227, 214, ${r.alpha}) 55%, rgba(127, 227, 214, ${r.alpha * 0.3}) 80%, transparent 100%)`,
              filter: "blur(40px)",
              transform: `translate3d(-50%, 0, 0) rotate(${r.angle}deg)`,
              animationDuration: `${r.dur}s`,
              animationDelay: `${r.delay}s`,
              mixBlendMode: "screen",
            }}
          />
        ))}
      </div>

      {/* Sedimento descendente — micro-partículas cayendo */}
      <div className="pointer-events-none absolute inset-0">
        {motes.map((m, i) => (
          <span
            key={i}
            className="absolute -top-2 block rounded-full bg-foam/25 animate-sediment will-change-transform"
            style={{
              left: `${m.left}%`,
              width: `${m.size}px`,
              height: `${m.size}px`,
              animationDuration: `${m.dur}s`,
              animationDelay: `${m.delay}s`,
              filter: `blur(${m.blur}px)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

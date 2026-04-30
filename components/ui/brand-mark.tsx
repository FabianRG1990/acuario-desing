import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * BrandMark
 * -----------------------------------------------------------------------------
 *  - <EmblemMark>: solo el emblema circular (manta + tortuga + kelp + olas).
 *    Usa el archivo recortado aquarium-emblem.png — ya viene como cuadrado
 *    ajustado al emblema, con fondo transparente.
 *  - <BrandLockup>: marca completa (emblema + AQUARIUM + tagline).
 *  - <EmblemStamp>: emblema sin ring, watermark editorial sutil.
 * -----------------------------------------------------------------------------
 */

const EMBLEM = "/logo/aquarium-emblem.png";
const LOCKUP = "/logo/aquarium-logo.png";

/**
 * EmblemMark — emblema solo, sin marco ni burbuja. Es la marca pura,
 * lista para usarse como contenido de un botón/link y llevar el
 * protagonismo de la identidad.
 */
export function EmblemMark({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src={EMBLEM}
        alt=""
        fill
        sizes={`${size}px`}
        priority
        className="object-contain"
      />
    </span>
  );
}

/**
 * EmblemStamp — solo el emblema, sin marco. Watermark editorial limpio.
 */
export function EmblemStamp({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("relative inline-block shrink-0 opacity-90", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src={EMBLEM}
        alt=""
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </span>
  );
}

export function BrandLockup({
  width = 220,
  height = 260,
  className,
  alt = "Aquarium",
}: {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}) {
  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      <Image
        src={LOCKUP}
        alt={alt}
        fill
        sizes={`${width}px`}
        className="object-contain"
      />
    </div>
  );
}

import Link from "next/link";
import { BrandLockup } from "@/components/ui/brand-mark";

const groups = [
  {
    title: "Inmersión",
    links: [
      { label: "Exhibiciones", href: "/exhibiciones" },
      { label: "Especies", href: "/especies" },
      { label: "Noche bioluminiscente", href: "/exhibiciones" },
    ],
  },
  {
    title: "Instituto",
    links: [
      { label: "Conservación", href: "/conservacion" },
      { label: "Investigación", href: "/conservacion" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-foam/10 bg-abyss text-foam">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.6fr,1fr,1fr]">
          <div>
            <div className="flex items-start gap-5">
              <BrandLockup width={170} height={210} className="-mt-3 -ml-2" />
              <div className="mt-2 flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-eyebrow text-foam/50">
                  Est. 1992 · 09°56'N
                </span>
                <span className="text-[10px] uppercase tracking-eyebrow text-foam/35">
                  Instituto · CR
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-pretty text-foam/65 leading-relaxed">
              Un instituto vivo dedicado a la conservación marina, la
              divulgación científica y la experiencia inmersiva con las
              criaturas más extraordinarias del océano profundo.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-[10px] uppercase tracking-eyebrow text-foam/45">
                {g.title}
              </p>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-foam/80 transition-colors duration-500 hover:text-lagoon"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-8 border-t border-foam/10 pt-8 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-eyebrow text-foam/45">
            © {new Date().getFullYear()} · Acuario · Paseo Marítimo 1492 · San
            José
          </p>
          <ul className="flex flex-wrap gap-6 text-[11px] uppercase tracking-eyebrow text-foam/55">
            <li>Aviso legal</li>
            <li>Privacidad</li>
            <li>Sostenibilidad</li>
            <li>Prensa</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

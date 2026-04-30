import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { FloatingNav } from "@/components/nav/floating-nav";
import { Footer } from "@/components/footer";
import { OceanBackground } from "@/components/ocean-background";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Acuario — Inmersión en lo profundo",
  description:
    "Acuario es un instituto vivo dedicado a la conservación marina, la divulgación científica y la experiencia inmersiva con las criaturas más extraordinarias del océano.",
  metadataBase: new URL("https://acuario.local"),
  openGraph: {
    title: "Acuario",
    description: "Inmersión en lo profundo. Conservación, ciencia y asombro.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${GeistSans.variable}`}
    >
      <body className="min-h-[100dvh] bg-abyss text-foam grain antialiased">
        <OceanBackground />
        <FloatingNav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

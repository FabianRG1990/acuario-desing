import { Hero } from "@/components/hero/hero";
import { FeaturedExhibits } from "@/components/sections/featured-exhibits";
import { SpeciesMarquee } from "@/components/sections/species-marquee";
import { Conservation } from "@/components/sections/conservation";
import { Visit } from "@/components/sections/visit";
import { Membership } from "@/components/sections/membership";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedExhibits />
      <SpeciesMarquee />
      <Conservation />
      <Visit />
      <Membership />
    </>
  );
}

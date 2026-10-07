import { HomeHero } from "@/components/sections/HomeHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AmbientSelector } from "@/components/sections/AmbientSelector";
import { DiagnosticoIntegrado } from "@/components/sections/DiagnosticoIntegrado";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <AmbientSelector />
      <DiagnosticoIntegrado />
      <TeamPreview />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}

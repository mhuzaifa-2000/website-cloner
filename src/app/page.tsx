import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TextScrollSection } from "@/components/TextScrollSection";
import { TextSpacer } from "@/components/TextSpacer";
import { ExploreSection } from "@/components/ExploreSection";
import { StatsSection } from "@/components/StatsSection";
import { GlobeSection } from "@/components/GlobeSection";
import { PartnersSection } from "@/components/PartnersSection";
import { InsightsSection } from "@/components/InsightsSection";
import { Footer } from "@/components/Footer";
import { TEXT_SPACERS } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#001413] text-white">
      <Header />
      <main>
        <HeroSection />
        <TextScrollSection />
        <TextSpacer text={TEXT_SPACERS[0]} />
        <ExploreSection />
        <StatsSection />
        <TextSpacer text={TEXT_SPACERS[1]} />
        <GlobeSection />
        <TextSpacer text={TEXT_SPACERS[2]} />
        <PartnersSection />
        <TextSpacer text={TEXT_SPACERS[3]} />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
}

import { CTASection } from "@/components/CTASection";
import { EventsSection } from "@/components/EventsSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { PositioningStatement } from "@/components/PositioningStatement";
import { ResearchGrid } from "@/components/ResearchGrid";
import { SectorStrip } from "@/components/SectorStrip";
import { WorkAreas } from "@/components/WorkAreas";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <SectorStrip />
      <FeaturedWork />
      <PositioningStatement />
      <WorkAreas />
      <ResearchGrid />
      <EventsSection />
      <CTASection />
    </PageShell>
  );
}

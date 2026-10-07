import { Container } from "@/components/ui/Container";
import { liabilityPositioning } from "@/lib/positioning";

export function PositioningStatement() {
  return (
    <section id="about" className="scroll-mt-24 bg-paper">
      <div className="hairline" />
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[15px] font-semibold tracking-[-0.01em] text-blue sm:text-[16px]">
            {liabilityPositioning.tagline}
          </p>
          <h2 className="display mt-6 text-[2.4rem] font-semibold leading-[1.12] tracking-[-0.045em] text-navy sm:text-5xl lg:text-[3.75rem]">
            {liabilityPositioning.headline}
          </h2>
          {liabilityPositioning.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mx-auto mt-6 max-w-[560px] text-lg leading-8 text-navy-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

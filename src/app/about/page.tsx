import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { SpeakerCard } from "@/components/SpeakerCard";
import { Container } from "@/components/ui/Container";
import {
  fiveYearChairQuote,
  fiveYearHighlights,
  fiveYearIntro,
  missionSummary,
  objectives,
  originsParagraphs,
  teamMemberIds,
} from "@/lib/about-copy";
import { launchPartners } from "@/lib/partners";
import { getPeople } from "@/lib/people";

export const metadata: Metadata = {
  title: "About",
  description:
    "Validate AI is an independent community interest company dedicated to improving how AI systems are validated.",
};

export default function AboutPage() {
  const team = getPeople([...teamMemberIds]);

  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="Enabling trusted AI systems"
        description={missionSummary}
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
            Our objectives
          </h2>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-[16px] leading-7 text-navy-muted">
            {objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
            Origins
          </h2>
          <div className="mt-6 space-y-5 text-[16px] leading-7 text-navy-muted">
            {originsParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container>
          <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
            Five-year milestone
          </h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-7 text-navy-muted">
            {fiveYearIntro}
          </p>
          <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-[16px] leading-7 text-navy-muted">
            {fiveYearHighlights.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] font-medium text-navy">
            {fiveYearChairQuote.name}
          </p>
          <p className="text-[14px] text-navy-muted">{fiveYearChairQuote.role}</p>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-20">
        <Container>
          <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
            Team
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <SpeakerCard key={person.id} person={person} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container>
          <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
            Launch partners
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {launchPartners.map((partner) => (
              <article
                key={partner.id}
                className="rounded-2xl bg-white p-6 ring-1 ring-line"
              >
                <div className="relative mb-5 h-16 w-full max-w-[200px]">
                  <Image
                    src={partner.logo}
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="200px"
                  />
                </div>
                <h3 className="display text-lg font-semibold text-navy">
                  {partner.name}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-navy-muted">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

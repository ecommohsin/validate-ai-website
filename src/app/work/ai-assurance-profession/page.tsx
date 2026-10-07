import type { Metadata } from "next";
import Link from "next/link";
import { EmphasizedText } from "@/components/EmphasizedText";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import {
  professionIntro,
  professionIntroEmphasis,
  professionInternationalEmphasis,
  professionPage,
  professionSections,
} from "@/lib/ai-assurance-profession";

export const metadata: Metadata = {
  title: "AI Assurance Profession",
  description:
    "Validate AI support for the BCS-led AI Assurance Stakeholder Consortium and the development of the AI assurance profession.",
};

export default function AiAssuranceProfessionPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={professionPage.eyebrow} title={professionPage.title} />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-[17px] leading-8 text-navy-muted">
            <EmphasizedText text={professionIntro} emphasis={professionIntroEmphasis} />
          </p>
        </Container>
      </section>

      {professionSections.map((section, index) => (
        <section
          key={section.id}
          className={`py-16 sm:py-20 ${index % 2 === 0 ? "bg-paper" : "bg-white"}`}
        >
          <Container className="max-w-3xl">
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              {section.title}
            </h2>
            <div className="mt-6 space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-[16px] leading-7 text-navy-muted">
                  {section.id === "international" &&
                  paragraph.includes(professionInternationalEmphasis) ? (
                    <EmphasizedText
                      text={paragraph}
                      emphasis={professionInternationalEmphasis}
                    />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="border-t border-line bg-paper py-10">
        <Container>
          <Link href="/work" className="text-sm font-medium text-blue">
            ← Our work
          </Link>
        </Container>
      </section>
    </PageShell>
  );
}

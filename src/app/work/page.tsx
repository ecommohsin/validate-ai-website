import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import { workProgrammes } from "@/lib/about-copy";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Conferences, masterclasses, roadshows and global capability building for AI validation and assurance.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our work"
        title="Advancing AI assurance in practice"
        description="Validate AI convenes experts from government, industry and academia to share methods for validating and maintaining AI systems, championing assurance standards and community collaboration."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {workProgrammes.map((programme) => (
              <article
                key={programme.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-line"
              >
                <div>
                  <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
                    {programme.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-navy-muted">
                    {programme.description}
                  </p>
                </div>
                <Link
                  href={programme.href}
                  className="mt-8 inline-flex items-center gap-1 text-[14px] font-medium text-blue transition-all hover:gap-2"
                >
                  Explore
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

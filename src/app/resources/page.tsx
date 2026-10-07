import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import { publications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Resources",
  description: "White papers, programmes and roadshow outputs from Validate AI.",
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Resources"
        title="Evidence for trustworthy AI"
        description="Download white papers and programmes published by Validate AI and partners."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="grid gap-6">
          {publications.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8"
            >
              <p className="text-[12px] font-semibold tracking-[0.08em] text-blue uppercase">
                {item.category}
                <span className="mx-2 text-line-strong">·</span>
                <span className="font-medium tracking-[0.04em] text-navy-soft">
                  {item.date}
                </span>
              </p>
              <h2 className="display mt-3 text-2xl font-semibold tracking-[-0.03em] text-navy">
                {item.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-navy-muted">
                {item.description}
              </p>
              <Link
                href={item.file}
                className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-blue transition-all hover:gap-2"
                target="_blank"
                rel="noreferrer"
              >
                Download PDF
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}

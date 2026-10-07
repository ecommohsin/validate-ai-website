import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Validate AI.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Work with Validate AI on assurance, research, events and responsible AI initiatives."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-xl font-semibold text-navy">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-[16px] text-blue hover:underline"
            >
              {site.email}
            </a>
            <p className="mt-6 text-[15px] leading-7 text-navy-muted">
              Follow us on{" "}
              <a
                href={site.twitter}
                className="text-blue hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                {site.twitterHandle}
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </PageShell>
  );
}

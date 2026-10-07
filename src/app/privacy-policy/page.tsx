import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";
import { privacySections } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This privacy notice tells you what to expect us to do with your personal information."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-[16px] leading-7 text-navy-muted">
            Contact:{" "}
            <a className="text-blue hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>

          <div className="mt-12 space-y-10">
            {privacySections.map((section) => (
              <div key={section.title}>
                <h2 className="display text-xl font-semibold tracking-[-0.02em] text-navy">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-[16px] leading-7 text-navy-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12">
            <Link href="/" className="text-sm font-medium text-blue">
              ← Back to homepage
            </Link>
          </p>
        </Container>
      </section>
    </PageShell>
  );
}

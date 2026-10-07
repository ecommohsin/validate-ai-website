import type { Metadata } from "next";
import Link from "next/link";
import { ForumEmptySection } from "@/components/ForumEmptySection";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import {
  forumPage,
  forumPast,
  forumResources,
  forumUpcoming,
} from "@/lib/ai-assurance-forum";

export const metadata: Metadata = {
  title: "AI Assurance Forum",
  description: "Validate AI AI Assurance Forum — events, speakers and resources.",
};

export default function AiAssuranceForumPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Events"
        title={forumPage.title}
        description={
          forumPage.intro ||
          "Dedicated home for AI Assurance Forum updates. Event details, speakers and resources will be published here."
        }
      />

      {forumUpcoming.length > 0 ? (
        <section className="bg-paper py-16 sm:py-20">
          <Container>
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              Upcoming
            </h2>
          </Container>
        </section>
      ) : (
        <ForumEmptySection
          title="Upcoming"
          description="No upcoming forum events are published yet."
        />
      )}

      {forumPast.length > 0 ? (
        <section className="border-t border-line bg-paper py-16 sm:py-20">
          <Container>
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              Past forums
            </h2>
          </Container>
        </section>
      ) : (
        <ForumEmptySection
          title="Past forums"
          description="Previous forum editions will be listed here."
        />
      )}

      {forumResources.length > 0 ? (
        <section className="border-t border-line bg-paper py-16 sm:py-20">
          <Container>
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              Resources
            </h2>
          </Container>
        </section>
      ) : (
        <ForumEmptySection
          title="Resources"
          description="Slides, recordings and papers from the forum will appear here."
        />
      )}

      <section className="border-t border-line bg-paper py-10">
        <Container>
          <Link href="/events" className="text-sm font-medium text-blue">
            ← All events
          </Link>
        </Container>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { EventListCard } from "@/components/EventListCard";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import { getEventsOverview } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Validate AI conferences, masterclasses and roadshow programmes.",
};

export default function EventsPage() {
  const items = getEventsOverview();

  return (
    <PageShell>
      <PageHeader
        eyebrow="Events"
        title="Convening the community"
        description="Past conferences, masterclasses and roadshow workshops on AI validation, assurance and responsible deployment."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <article className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
            <p className="text-[12px] font-semibold tracking-[0.08em] text-blue uppercase">
              Programme
            </p>
            <h2 className="display mt-3 text-2xl font-semibold tracking-[-0.03em] text-navy">
              AI Assurance Forum
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-navy-muted">
              Updates on the AI Assurance Forum — separate from our conferences,
              masterclasses and roadshow archive.
            </p>
            <Link
              href="/events/ai-assurance-forum"
              className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-blue transition-all hover:gap-2"
            >
              View forum page
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          {items.map((event) => (
            <EventListCard key={event.slug} event={event} />
          ))}
        </Container>
      </section>
    </PageShell>
  );
}

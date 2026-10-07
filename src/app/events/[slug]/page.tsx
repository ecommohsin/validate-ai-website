import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SpeakerCard } from "@/components/SpeakerCard";
import { Container } from "@/components/ui/Container";
import { events, getEvent } from "@/lib/events";
import { getPeople } from "@/lib/people";
import { getPublication } from "@/lib/publications";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event" };
  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const speakers = getPeople(event.speakerIds ?? []);
  const relatedPubs = (event.publicationIds ?? [])
    .map((id) => getPublication(id))
    .filter(Boolean);
  const relatedEvents = (event.relatedSlugs ?? [])
    .map((s) => getEvent(s))
    .filter(Boolean);

  return (
    <PageShell>
      <section className="relative min-h-[360px] border-b border-line sm:min-h-[440px]">
        <Image
          src={event.heroImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/20" />
        <Container className="relative flex min-h-[360px] flex-col justify-end py-12 sm:min-h-[440px] sm:py-16">
          <p className="text-[13px] font-medium tracking-[0.08em] text-white/70 uppercase">
            {event.status === "past" ? "Past event" : "Upcoming"}
          </p>
          <h1 className="display mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            {event.title}
          </h1>
          <p className="mt-4 text-[15px] font-medium text-white/85">
            {event.dateLabel} · {event.location}
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-[17px] leading-8 text-navy-muted">{event.summary}</p>
          <div className="mt-8 space-y-5 text-[16px] leading-7 text-navy-muted">
            {event.description.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      {event.recordingIds && event.recordingIds.length > 0 ? (
        <section className="border-t border-line bg-paper py-16 sm:py-20">
          <Container>
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              Recordings
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {event.recordingIds.map((recording) => (
                <div key={recording.youtubeId}>
                  <p className="mb-3 text-[14px] font-medium text-navy">{recording.title}</p>
                  <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-line">
                    <iframe
                      title={recording.title}
                      src={`https://www.youtube-nocookie.com/embed/${recording.youtubeId}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {speakers.length > 0 ? (
        <section className="border-t border-line bg-white py-16 sm:py-20">
          <Container>
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              Speakers
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map((person) => (
                <SpeakerCard key={person.id} person={person} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {event.galleryImages && event.galleryImages.length > 0 ? (
        <section className="border-t border-line bg-paper py-16 sm:py-20">
          <Container>
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              Photography
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {event.galleryImages.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-line"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="400px" />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {relatedPubs.length > 0 ? (
        <section className="border-t border-line bg-white py-16 sm:py-20">
          <Container className="max-w-3xl">
            <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
              Related resources
            </h2>
            <ul className="mt-6 space-y-4">
              {relatedPubs.map((pub) =>
                pub ? (
                  <li key={pub.id}>
                    <Link
                      href={pub.file}
                      className="text-[15px] font-medium text-blue hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pub.title} (PDF)
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </Container>
        </section>
      ) : null}

      {relatedEvents.length > 0 ? (
        <section className="border-t border-line bg-paper py-12 sm:py-16">
          <Container>
            <Link href="/events" className="text-sm font-medium text-blue">
              ← All events
            </Link>
            <ul className="mt-4 space-y-2">
              {relatedEvents.map((related) =>
                related ? (
                  <li key={related.slug}>
                    <Link
                      href={`/events/${related.slug}`}
                      className="text-[15px] text-navy-muted hover:text-blue"
                    >
                      {related.title}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </Container>
        </section>
      ) : null}
    </PageShell>
  );
}

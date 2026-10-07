import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getFeaturedEvent } from "@/lib/events";

export function EventsSection() {
  const event = getFeaturedEvent();

  return (
    <section id="events" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[13px] font-medium tracking-[0.08em] text-navy-muted uppercase">
              Events
            </p>
            <h2 className="display mt-3 text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl">
              Convening the community
            </h2>
          </div>
          <Link
            href="/events"
            className="text-[14px] font-medium text-blue transition-opacity hover:opacity-70"
          >
            View all events →
          </Link>
        </div>

        <article className="mt-12 grid overflow-hidden rounded-[28px] ring-1 ring-line lg:grid-cols-12">
          <div className="relative min-h-[320px] lg:col-span-7 lg:min-h-[480px]">
            <Image
              src="/images/conference-speaker.jpg"
              alt="Audience at the Validate AI conference in the Royal Society lecture theatre"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-paper px-8 py-10 sm:px-12 lg:col-span-5">
            <p className="text-[12px] font-semibold tracking-[0.08em] text-blue uppercase">
              Featured event
            </p>
            <h3 className="display mt-3 text-2xl font-semibold tracking-[-0.03em] text-navy sm:text-[2rem] sm:leading-tight">
              {event.title}
            </h3>
            <p className="mt-3 text-[14px] font-medium text-navy-muted">
              {event.dateLabel} · {event.location}
            </p>
            <p className="mt-5 text-[15px] leading-7 text-navy-muted">{event.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`/events/${event.slug}`}>
                Learn more
                <span aria-hidden="true">→</span>
              </Button>
              <Button href="/contact" variant="secondary">
                Work with us
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

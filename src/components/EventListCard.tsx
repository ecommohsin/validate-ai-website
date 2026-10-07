import Link from "next/link";
import type { SiteEvent } from "@/lib/types";

type EventListCardProps = {
  event: SiteEvent;
};

export function EventListCard({ event }: EventListCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[12px] font-semibold tracking-[0.08em] text-blue uppercase">
          {event.status === "past" ? "Past event" : "Upcoming"}
        </p>
        <span className="text-line-strong">·</span>
        <p className="text-[13px] font-medium text-navy-muted">
          {event.dateLabel} · {event.location}
        </p>
      </div>
      <h2 className="display mt-3 text-2xl font-semibold tracking-[-0.03em] text-navy">
        {event.title}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-navy-muted">
        {event.summary}
      </p>
      <Link
        href={`/events/${event.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-blue transition-all hover:gap-2"
      >
        Learn more
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

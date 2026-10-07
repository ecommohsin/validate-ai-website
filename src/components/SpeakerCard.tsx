import Image from "next/image";
import type { Person } from "@/lib/types";

type SpeakerCardProps = {
  person: Person;
};

export function SpeakerCard({ person }: SpeakerCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
      <div className="relative h-[260px] w-full overflow-hidden bg-paper">
        {person.image ? (
          <Image
            src={person.image}
            alt=""
            fill
            className="h-[260px] w-full object-cover object-center"
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
          />
        ) : null}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="display text-lg font-semibold tracking-[-0.02em] text-navy">
          {person.name}
        </h3>
        {person.role ? (
          <p className="mt-1 text-[13px] font-medium text-blue">{person.role}</p>
        ) : null}
        <p className="mt-3 text-[14px] leading-6 text-navy-muted">{person.bio}</p>
      </div>
    </article>
  );
}

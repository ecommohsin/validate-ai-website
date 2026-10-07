import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { workAreas } from "@/lib/content";

const accents = [
  "from-blue to-cyan",
  "from-violet to-blue",
  "from-cyan to-violet",
  "from-coral/80 to-blue",
];

function AreaMark({ index }: { index: number }) {
  const marks = [
    <svg key="a" viewBox="0 0 64 40" className="h-10 w-16" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="56" height="24" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 20 l6 6 14-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>,
    <svg key="b" viewBox="0 0 64 40" className="h-10 w-16" fill="none" aria-hidden="true">
      <path d="M8 28 C 20 8, 44 8, 56 28" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="32" cy="14" r="3.2" fill="currentColor" />
      <path d="M32 18 v12" stroke="currentColor" strokeWidth="1.4" />
    </svg>,
    <svg key="c" viewBox="0 0 64 40" className="h-10 w-16" fill="none" aria-hidden="true">
      <circle cx="22" cy="20" r="10" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="42" cy="20" r="10" stroke="currentColor" strokeWidth="1.4" />
    </svg>,
    <svg key="d" viewBox="0 0 64 40" className="h-10 w-16" fill="none" aria-hidden="true">
      <path d="M10 28 h12 v-16 h12 v16 h12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>,
  ];
  return marks[index] ?? marks[0];
}

export function WorkAreas() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-xl">
          <p className="text-[13px] font-medium tracking-[0.08em] text-navy-muted uppercase">
            What we do
          </p>
          <h2 className="display mt-3 text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl">
            Four areas of focus
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {workAreas.map((area, index) => (
            <article
              key={area.id}
              className="group border-b border-line px-0 py-8 sm:px-6 lg:border-r lg:border-b-0 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0 sm:odd:border-r"
            >
              <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${accents[index]}`} />
              <div className="mt-6 text-blue">
                <AreaMark index={index} />
              </div>
              <h3 className="display mt-5 text-xl font-semibold tracking-[-0.02em] text-navy">
                {area.title}
              </h3>
              <p className="mt-3 max-w-[260px] text-[15px] leading-6 text-navy-muted">
                {area.description}
              </p>
              <Link
                href={area.href}
                className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-blue transition-all hover:gap-2"
              >
                Explore
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

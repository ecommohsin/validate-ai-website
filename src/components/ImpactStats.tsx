import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/content";

export function ImpactStats() {
  return (
    <section className="border-y border-line bg-white" aria-labelledby="impact-heading">
      <h2 id="impact-heading" className="sr-only">
        Impact
      </h2>
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-1 py-10 sm:px-6 sm:py-14 ${index !== 0 ? "lg:border-l lg:border-line" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-line" : ""}`}
          >
            <p className="display text-[2.75rem] font-semibold tracking-[-0.04em] text-navy sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 max-w-[180px] text-sm leading-5 text-navy-muted">
              {stat.label}
            </p>
            {stat.placeholder ? (
              <p className="mt-3 text-[11px] font-medium tracking-[0.08em] text-navy-soft uppercase">
                Placeholder figure
              </p>
            ) : null}
          </div>
        ))}
      </Container>
    </section>
  );
}

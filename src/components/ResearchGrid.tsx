import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getHomePublications } from "@/lib/publications";

export function ResearchGrid() {
  const { featured, secondary } = getHomePublications();
  const items = [secondary].filter(Boolean);

  return (
    <section id="research" className="scroll-mt-24 bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[13px] font-medium tracking-[0.08em] text-navy-muted uppercase">
              Research & insights
            </p>
            <h2 className="display mt-3 text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl">
              Evidence for trustworthy AI
            </h2>
          </div>
          <Link
            href="/resources"
            className="text-[14px] font-medium text-blue transition-opacity hover:opacity-70"
          >
            View all resources →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {featured ? (
            <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-line lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/conference-programmes.jpg"
                  alt="Validate AI conference programmes at the Royal Society"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-[12px] font-semibold tracking-[0.08em] text-blue uppercase">
                  {featured.category}
                  <span className="mx-2 text-line-strong">·</span>
                  <span className="font-medium tracking-[0.04em] text-navy-soft">
                    {featured.date}
                  </span>
                </p>
                <h3 className="display mt-3 text-2xl font-semibold tracking-[-0.03em] text-navy sm:text-[1.75rem]">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-6 text-navy-muted">
                  {featured.description}
                </p>
                <Link
                  href={featured.file}
                  className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-blue transition-all hover:gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the paper
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ) : null}

          <div className="flex flex-col gap-6 lg:col-span-5">
            {items.map((item) =>
              item ? (
                <article
                  key={item.id}
                  className="flex flex-1 flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-line transition-shadow hover:shadow-[0_10px_30px_rgb(11_31_58_/_0.06)]"
                >
                  <div>
                    <p className="text-[12px] font-semibold tracking-[0.08em] text-blue uppercase">
                      {item.category}
                      <span className="mx-2 text-line-strong">·</span>
                      <span className="font-medium tracking-[0.04em] text-navy-soft">
                        {item.date}
                      </span>
                    </p>
                    <h3 className="display mt-2 text-lg font-semibold tracking-[-0.02em] text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-navy-muted">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={item.file}
                    className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-blue transition-all hover:gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ) : null,
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

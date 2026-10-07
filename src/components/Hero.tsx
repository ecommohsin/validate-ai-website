import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroStatement } from "@/lib/positioning";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          priority
          className="object-cover object-left"
          sizes="48vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent" />
      </div>

      <Container className="relative grid min-h-[calc(100svh-72px)] items-center py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
        <div className="max-w-[640px]">
          <p className="text-[13px] font-medium tracking-[0.04em] text-navy-muted">
            Advancing trustworthy AI since 2019
          </p>
          <h1 className="display mt-5 text-balance text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[3.85rem] lg:leading-[1.08]">
            {heroStatement.headline}
          </h1>
          <div className="mt-7 max-w-[34rem] space-y-4">
            {heroStatement.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[16px] leading-7 text-navy-muted sm:text-[17px] sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-9">
            <Button href="/work">
              Explore our work
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

        <div className="relative mt-12 h-56 overflow-hidden rounded-2xl ring-1 ring-line sm:h-72 lg:hidden">
          <Image
            src="/images/hero-background.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

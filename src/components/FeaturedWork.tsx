import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <article className="relative isolate overflow-hidden rounded-[28px] min-h-[420px] sm:min-h-[520px]">
          <Image
            src="/images/conference-stage.jpg"
            alt="Speaker presenting at the Validate AI conference at the Royal Society"
            fill
            className="object-cover object-[center_25%]"
            sizes="(min-width: 1120px) 1120px, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-navy/15" />
          <div className="relative flex min-h-[420px] max-w-xl flex-col justify-end p-8 sm:min-h-[520px] sm:p-12 lg:p-14">
            <p className="text-[13px] font-medium tracking-[0.08em] text-white/70 uppercase">
              Conferences · Roadshows · Masterclasses
            </p>
            <h2 className="display mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.1]">
              Advancing AI assurance in practice
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-7 text-white/80">
              We convene experts from government, industry and academia to share
              methods for validating and maintaining AI systems in the real
              world.
            </p>
            <div className="mt-8">
              <Button href="/work" variant="onDark">
                Explore our work
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

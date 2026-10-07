import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative scroll-mt-24 overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(26,111,181,0.55),transparent_68%)]" />
        <div className="absolute -left-16 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(92,99,184,0.4),transparent_70%)]" />
        <div className="absolute right-1/3 bottom-8 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(224,122,95,0.28),transparent_70%)]" />
      </div>
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Help shape trustworthy AI.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-white/70">
            Work with Validate AI on assurance, research, events and responsible
            AI initiatives.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="onDark">
              Work with us
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="/contact" variant="onDarkGhost">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

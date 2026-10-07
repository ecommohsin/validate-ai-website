import { Container } from "@/components/ui/Container";
import { sectors } from "@/lib/content";

export function SectorStrip() {
  return (
    <section
      aria-label="Sectors we work across"
      className="border-b border-line bg-white"
    >
      <Container className="grid grid-cols-2 divide-x divide-line sm:grid-cols-5">
        {sectors.map((sector) => (
          <div
            key={sector}
            className="flex min-h-[88px] items-center justify-center px-4 py-6 text-center"
          >
            <span className="display text-[13px] font-semibold tracking-[0.08em] text-navy-muted uppercase sm:text-[12px] lg:text-[13px]">
              {sector}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}

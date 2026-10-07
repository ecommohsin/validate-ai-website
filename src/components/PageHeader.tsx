import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        {eyebrow ? (
          <p className="text-[13px] font-medium tracking-[0.08em] text-navy-muted uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="display mt-3 text-4xl font-semibold tracking-[-0.035em] text-navy sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 text-[17px] leading-8 text-navy-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}

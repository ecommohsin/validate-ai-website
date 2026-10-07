type ForumEmptySectionProps = {
  title: string;
  description?: string;
};

export function ForumEmptySection({ title, description }: ForumEmptySectionProps) {
  return (
    <section className="border-t border-line bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1120px] px-6 sm:px-8">
        <h2 className="display text-2xl font-semibold tracking-[-0.03em] text-navy">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-navy-muted">
          {description ?? "Content for this section will be added here."}
        </p>
      </div>
    </section>
  );
}

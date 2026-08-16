export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border/70 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center md:py-20">
        <p className="eyebrow text-copper">{eyebrow}</p>
        <h1 className="mt-3 font-serif-display text-4xl font-semibold md:text-5xl">{title}</h1>
        <div className="rule-gradient mx-auto mt-5 h-px w-40" />
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

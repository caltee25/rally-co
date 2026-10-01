export default function SectionHeader({
    eyebrow,
    title,
    description,
  }: {
    eyebrow: string;
    title: string;
    description?: string;
  }) {
    return (
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-sm font-medium text-accent">{eyebrow}</p>
        <h2 className="font-display text-4xl leading-tight md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-lg text-muted">{description}</p>
        )}
      </div>
    );
  }
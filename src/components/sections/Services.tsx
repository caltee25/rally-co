import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <Section id="services" className="border-t border-border">
      <SectionHeader
        eyebrow="Services"
        title="Built around what you need."
        description="Every engagement is different. Tell us your goal, whether that's awareness, signups, or downloads, and we'll design the right approach."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <article
            key={service.title}
            className="flex flex-col rounded-2xl border border-border bg-surface p-7 transition hover:border-foreground/30"
          >
            <span className="text-sm text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-2xl">{service.title}</h3>
            <p className="mt-3 text-muted">{service.description}</p>

            <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
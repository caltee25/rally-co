import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <Section id="process" className="border-t border-border">
      <SectionHeader
        eyebrow="How it works"
        title="From first call to activation in days."
        description="Most campaigns launch within a couple of weeks of the first conversation, because our operators already have access."
      />

      <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            {/* Number badge + connecting line */}
            <div className="flex items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-medium">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="ml-3 hidden h-px flex-1 bg-border md:block" />
              )}
            </div>

            <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
            <p className="mt-3 text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
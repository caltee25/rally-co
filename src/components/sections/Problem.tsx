import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { problems } from "@/lib/content";

export default function Problem() {
  return (
    <Section id="problem" className="border-y border-border bg-surface">
      <SectionHeader
        eyebrow="The problem"
        title="Traditional marketing doesn't work on students."
      />

      <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
        {problems.map((problem, i) => (
          <div key={problem.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
            <span className="font-display text-5xl text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-2xl">{problem.title}</h3>
            <p className="mt-3 text-muted">{problem.description}</p>
            <p className="mt-6 text-sm font-medium">{problem.proof}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
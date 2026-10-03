import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { campuses } from "@/lib/content";

export default function Network() {
  return (
    <Section id="campuses" className="border-t border-border bg-surface">
      <SectionHeader
        eyebrow="Our network"
        title="Two campuses. One strategy."
        description="Every campaign is run by an operator who is enrolled at the school, with expansion planned one campus at a time."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {campuses.map((campus) => (
          <article
            key={campus.name}
            className="rounded-2xl border border-border bg-background p-8"
          >
            <p className="text-sm text-muted">{campus.location}</p>
            <h3 className="mt-2 font-display text-4xl">{campus.school}</h3>
            <p className="mt-4 text-muted">{campus.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
              <div>
                <dt className="text-muted">Operator</dt>
                <dd className="mt-1 font-medium">{campus.operator}</dd>
              </div>
              <div>
                <dt className="text-muted">Students</dt>
                <dd className="mt-1 font-medium">{campus.students}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
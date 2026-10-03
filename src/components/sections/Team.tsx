import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <Section id="team" className="border-t border-border">
      <SectionHeader
        eyebrow="The team"
        title="Founders who are students on the campuses we serve."
        description="Everyone at Rally is currently enrolled, which is exactly why the access is real."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {team.map((person) => (
          <article
            key={person.name}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <div className="flex items-center gap-4">
              {/* Initials avatar: swap for a real photo later */}
              <div
                aria-hidden
                className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground font-display text-2xl text-background"
              >
                {person.name[0]}
              </div>
              <div>
                <h3 className="font-display text-3xl">{person.name}</h3>
                <p className="text-sm text-muted">
                  {person.role} · {person.campus}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm font-medium">
              {person.school} · {person.year}
            </p>
            <p className="mt-3 text-muted">{person.bio}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
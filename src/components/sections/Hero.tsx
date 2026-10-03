import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { campuses, services } from "@/lib/content";

export default function Hero() {
  return (
    <Section id="hero" className="relative isolate overflow-hidden">
      {/* Soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <p className="animate-fade-up mb-6 text-sm font-medium text-accent">
        Campus marketing agency
      </p>
      <h1
        className="animate-fade-up font-display max-w-3xl text-5xl leading-[1.05] md:text-7xl"
        style={{ animationDelay: "100ms" }}
      >
        Reach college students through the people they already trust.
      </h1>
      <p
        className="animate-fade-up mt-6 max-w-xl text-lg text-muted"
        style={{ animationDelay: "200ms" }}
      >
        We put your brand in front of students through enrolled operators at
        Pitt and Indiana.
      </p>
      <div
        className="animate-fade-up mt-10 flex flex-wrap gap-3"
        style={{ animationDelay: "300ms" }}
      >
        <Button href="/#contact">Start a project</Button>
        <Button href="/#services" variant="ghost">
          See services
        </Button>
      </div>

      <dl
        className="animate-fade-up mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-border pt-8"
        style={{ animationDelay: "450ms" }}
      >
        <div className="flex flex-col-reverse">
          <dt className="text-sm text-muted">Campuses</dt>
          <dd className="font-display text-4xl">
            <CountUp to={campuses.length} />
          </dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-sm text-muted">Services</dt>
          <dd className="font-display text-4xl">
            <CountUp to={services.length} />
          </dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-sm text-muted">Students on our campuses</dt>
          <dd className="font-display text-4xl">
            <CountUp to={79} suffix="K+" />
          </dd>
        </div>
      </dl>
    </Section>
  );
}
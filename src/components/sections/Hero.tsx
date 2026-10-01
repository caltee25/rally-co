import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section id="hero">
      <p className="mb-6 text-sm font-medium text-accent">
        Campus marketing agency
      </p>
      <h1 className="font-display max-w-3xl text-5xl leading-[1.05] md:text-7xl">
        Reach college students through the people they already trust.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        We put your brand in front of students through enrolled operators at
        Pitt, Indiana, and Providence.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/#contact">Start a project</Button>
        <Button href="/#services" variant="ghost">See services</Button>
      </div>
    </Section>
  );
}
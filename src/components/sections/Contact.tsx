import Section from "@/components/ui/Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-border bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-sm font-medium text-accent">Contact</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Let&apos;s talk about your goals.
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted">
            Tell us what you&apos;re trying to achieve and which campuses
            matter to you. We&apos;ll follow up after reviewing your message.
          </p>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
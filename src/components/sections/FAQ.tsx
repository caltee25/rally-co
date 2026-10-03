import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <Section id="faq" className="border-t border-border">
      <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />

      <div className="max-w-3xl divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span
                aria-hidden
                className="text-2xl text-muted transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
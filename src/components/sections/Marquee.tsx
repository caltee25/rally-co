import { services } from "@/lib/content";

export default function Marquee() {
  const items = [...services, ...services]; // doubled for a seamless loop

  return (
    <div
      aria-hidden
      className="marquee overflow-hidden border-y border-border bg-surface py-4"
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        {items.map((service, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-display text-xl text-muted"
          >
            {service.title}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
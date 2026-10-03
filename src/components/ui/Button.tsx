import Link from "next/link";

export default function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-85"
      : "border border-border text-foreground hover:bg-surface";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
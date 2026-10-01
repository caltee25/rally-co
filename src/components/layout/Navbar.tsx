import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Team", href: "/#team" },
  { label: "Campuses", href: "/#campuses" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-2xl">
          Rally Co.
        </Link>
        <nav className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted transition hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/#contact">Start a project</Button>
        </nav>
      </Container>
    </header>
  );
}
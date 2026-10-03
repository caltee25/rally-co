"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Team", href: "/#team" },
  { label: "Campuses", href: "/#campuses" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  // Scroll state + progress line
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      if (y < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.replace("/#", ""));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/80 backdrop-blur transition ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-2xl">
          Rally Co.
        </Link>

        <nav className="flex items-center gap-4 md:gap-8" aria-label="Main">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const isActive = active === l.href.replace("/#", "");
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-sm transition hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Button href="/#contact">Start a project</Button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-5 bg-foreground transition ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-foreground transition ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg text-muted transition hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </Container>
        </div>
      )}

      {/* Scroll progress line */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
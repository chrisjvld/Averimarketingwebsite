import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm">
              <BrandLogo />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Outbound cold email systems for booked meetings.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AveriMarketing. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}


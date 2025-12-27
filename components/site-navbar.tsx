"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { BOOK_CALL_URL } from "@/lib/links";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SmartLink } from "@/components/smart-link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <BrandLogo size="sm" />
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm text-muted-foreground transition-colors hover:text-foreground",
                    active && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)] md:inline-flex"
            >
              <SmartLink href={BOOK_CALL_URL}>Book a call</SmartLink>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <SheetHeader>
                  <SheetTitle>
                    <BrandLogo size="sm" />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 grid gap-2">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground hover:text-foreground",
                          active && "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <Button
                    asChild
                    className="mt-2 bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]"
                  >
                    <SmartLink href={BOOK_CALL_URL} onClick={() => setOpen(false)}>
                      Book a call
                    </SmartLink>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}


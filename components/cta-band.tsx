import Link from "next/link";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <Section divider>
      <Container>
        <div className="rounded-2xl border border-border bg-card px-6 py-10 sm:px-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-pretty text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
              {description ? (
                <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  className="bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]"
                >
                  <Link href={primary.href}>{primary.label}</Link>
                </Button>
                {secondary ? (
                  <Button asChild variant="outline">
                    <Link href={secondary.href}>{secondary.label}</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


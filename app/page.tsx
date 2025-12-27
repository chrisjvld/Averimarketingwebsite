import Link from "next/link";
import { ArrowRight, CheckCircle2, LayoutGrid, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/section";
import { Stepper } from "@/components/stepper";

export default function HomePage() {
  return (
    <>
      <Section className="overflow-hidden">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-muted-foreground">AveriMarketing</p>
              <h1 className="mt-3 text-pretty text-4xl font-medium tracking-tight sm:text-5xl">
                Clear strategy. Calm execution.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                A minimal, focused marketing partner for teams that value good process, consistent delivery, and
                thoughtful craft.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild className="bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]">
                  <Link href="/contact">
                    Contact <ArrowRight className="opacity-80" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">View services</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Simple, transparent workflow
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Clean deliverables
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-border bg-card p-6">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.04),transparent_55%)]" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Snapshot</p>
                    <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                      Weekly
                    </span>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-lg border border-border bg-background px-4 py-3">
                      <p className="text-xs text-muted-foreground">Planning</p>
                      <p className="mt-1 text-sm">Scope, priorities, and milestones</p>
                    </div>
                    <div className="rounded-lg border border-border bg-background px-4 py-3">
                      <p className="text-xs text-muted-foreground">Production</p>
                      <p className="mt-1 text-sm">Build, iterate, refine</p>
                    </div>
                    <div className="rounded-lg border border-border bg-background px-4 py-3">
                      <p className="text-xs text-muted-foreground">Reporting</p>
                      <p className="mt-1 text-sm">Simple updates, clear next steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="space-y-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <LayoutGrid className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Structure</CardTitle>
                <CardDescription>Clear planning and predictable delivery.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Tight scopes, consistent cadence, and documentation that stays useful.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <Sparkles className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Quality</CardTitle>
                <CardDescription>Polished output with minimal surface area.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Clean typography, strong spacing, and deliverables that are easy to adopt.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Consistency</CardTitle>
                <CardDescription>Work that holds up over time.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Systems-driven execution with light process and clear handoffs.
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">How it works</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A simple loop that keeps work moving and decisions clear.
              </p>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="/how-it-works">
                View the full workflow <ArrowRight className="opacity-70" />
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <Stepper
              steps={[
                { title: "Align", description: "Define scope and what success looks like." },
                { title: "Build", description: "Ship in small, reviewable increments." },
                { title: "Refine", description: "Iterate with feedback and clear next steps." },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Trusted by teams</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A quiet, reliable presence that fits into existing workflows.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-12 items-center justify-center rounded-lg border border-border bg-background text-xs font-medium text-muted-foreground"
                  >
                    Placeholder
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Ready to discuss a project?"
        description="Share a few details and we’ll reply with next steps."
        primary={{ href: "/contact", label: "Contact" }}
        secondary={{ href: "/services", label: "Explore services" }}
      />
    </>
  );
}


import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Target } from "lucide-react";

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
                Book more qualified sales calls with cold email.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                We design and run outbound email systems that turn targeted prospects into real sales conversations.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild className="bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]">
                  <Link href="/contact">
                    Book a call <ArrowRight className="opacity-80" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/how-it-works">See how it works</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Simple, transparent workflow
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Focus on replies and booked meetings
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-border bg-card p-6">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.05),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.03),transparent_55%)]" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">What we run</p>
                    <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                      Ongoing
                    </span>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-lg border border-border bg-background px-4 py-3">
                      <p className="text-xs text-muted-foreground">Deliverability</p>
                      <p className="mt-1 text-sm">Inbox setup, warmup, and health checks</p>
                    </div>
                    <div className="rounded-lg border border-border bg-background px-4 py-3">
                      <p className="text-xs text-muted-foreground">Targeting</p>
                      <p className="mt-1 text-sm">Lead sourcing and list building</p>
                    </div>
                    <div className="rounded-lg border border-border bg-background px-4 py-3">
                      <p className="text-xs text-muted-foreground">Campaigns</p>
                      <p className="mt-1 text-sm">Copy, follow-ups, testing, iteration</p>
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
                  <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Deliverability-first</CardTitle>
                <CardDescription>Protect sender reputation and inbox placement.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Inbox setup, warming, domain hygiene, and monitoring—before volume.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <Target className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Targeted lists</CardTitle>
                <CardDescription>Reach the right people with clean data.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                ICP-aligned sourcing, list building, validation, and ongoing maintenance.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Tested messaging</CardTitle>
                <CardDescription>Copy and follow-ups built to get replies.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Campaign strategy, copywriting, sequences, and iteration based on response data.
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
                A simple loop that keeps deliverability healthy and conversations moving.
              </p>
            </div>
            <Button asChild variant="link" className="hidden sm:inline-flex">
              <Link href="/how-it-works">
                See how it works <ArrowRight className="opacity-70" />
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <Stepper
              steps={[
                { title: "Set up", description: "Inboxes, deliverability checks, and sending foundation." },
                { title: "Launch", description: "Targeted lists, campaigns, and follow-up systems." },
                { title: "Improve", description: "Test, iterate, and report on what drives replies and meetings." },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">What we track</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We keep reporting simple and tied to real outcomes—without over-claiming.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Deliverability", v: "Inbox health, bounces, spam signals" },
                  { k: "Replies", v: "Reply rate and positive replies" },
                  { k: "Meetings", v: "Booked meetings and show-up notes" },
                  { k: "Iteration", v: "Tests run and what changed" },
                ].map((item) => (
                  <div key={item.k} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-medium">{item.k}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Want a predictable outbound system?"
        description="Book a short call. We’ll confirm fit, review constraints, and outline next steps."
        primary={{ href: "/contact", label: "Book a call" }}
        secondary={{ href: "/how-it-works", label: "See how it works" }}
      />
    </>
  );
}


import { ArrowRight, CheckCircle2 } from "lucide-react";

import { BOOK_CALL_URL } from "@/lib/links";
import Link from "next/link";
import { BookCallButton } from "@/components/book-call";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/section";
import { Stepper } from "@/components/stepper";

export default function HomePage() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <p className="text-sm font-medium text-muted-foreground">AveriMarketing</p>
              <h1 className="mt-3 text-pretty text-4xl font-medium tracking-tight sm:text-5xl">
                Book more qualified sales calls with cold email.
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                We run cold email end-to-end and book meetings directly into your calendar, so you don’t have to manage
                outbound yourself.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookCallButton className="bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]">
                  Book a call <ArrowRight className="opacity-80" />
                </BookCallButton>
                <Button asChild variant="outline">
                  <Link href="/how-it-works">See how it works</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-medium">Quick reassurance</p>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>Fully done-for-you</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>No tools or setup required</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>Meetings booked into your calendar</span>
                  </div>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  We focus on replies, positive replies, and meetings booked—without promising guaranteed outcomes.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">What we do</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We run outbound for you. You don’t need to manage inboxes, tools, or campaigns.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <CardTitle>Deliverables</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Inbox setup &amp; deliverability</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Lead sourcing &amp; list building</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Campaign strategy &amp; cold email copywriting</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Follow-up systems</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Reporting &amp; iteration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">How it works</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Three steps designed to keep your involvement low.
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
                { title: "Quick alignment", description: "Confirm targeting, calendar access, and what “qualified” means." },
                { title: "We build and launch", description: "Deliverability, lists, copy, campaigns, and follow-ups." },
                { title: "Meetings land on your calendar", description: "We optimize and report while you take sales calls." },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">What you get</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A simple, fully managed system—built to run in the background.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <CardTitle>Checklist</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Fully managed outbound",
                      "Ongoing optimization",
                      "Clear reporting",
                      "Booked sales conversations",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Metrics that matter</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                No vanity dashboards. Just the signals tied to outbound performance.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Replies", v: "Reply rate and response quality" },
                  { k: "Positive replies", v: "Interested responses and next steps" },
                  { k: "Meetings booked", v: "Meetings scheduled into your calendar" },
                  { k: "Deliverability health", v: "Inbox health, bounces, spam signals" },
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
        title="If outbound isn’t something you want to manage, we can handle it."
        description="Book a short call. We’ll confirm fit and outline the next steps."
        primary={{ href: BOOK_CALL_URL, label: "Book a call" }}
        primaryMode="book"
        secondary={{ href: "/how-it-works", label: "See how it works" }}
      />
    </>
  );
}


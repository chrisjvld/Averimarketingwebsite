import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { BookCallButton } from "@/components/book-call";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Section } from "@/components/section";
import { Stepper } from "@/components/stepper";
import { BOOK_CALL_URL } from "@/lib/links";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Section className="pt-24 pb-20 sm:pt-32 sm:pb-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-6xl sm:leading-[1.1]">
              We book qualified sales meetings for AI implementation consultants.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
              Simple. Clear. Outcome-focused.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              We run cold email campaigns end-to-end so you can spend less time prospecting and more time closing the right clients.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookCallButton className="h-12 px-8 text-base bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90">
                Book a call <ArrowRight className="ml-2 h-4 w-4" />
              </BookCallButton>
              <p className="text-sm text-muted-foreground">
                No retainers. No long-term contracts. Just focused outbound.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* TRUST / POSITIONING STRIP */}
      <div className="border-y border-border bg-card/50 py-4">
        <Container>
          <p className="text-center text-sm font-medium text-muted-foreground">
            Built specifically for AI consultants and automation agencies.{" "}
            <span className="opacity-60">Not for generalists. Not for mass-market offers.</span>
          </p>
        </Container>
      </div>

      {/* OUR PROCESS */}
      <Section divider>
        <Container>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Our process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A simple, hands-off system designed for AI implementation consultants.
            </p>
          </div>
          <Stepper
            variant="detailed"
            steps={[
              {
                title: "Targeting & positioning",
                description:
                  "We define a narrow ideal customer profile and build a focused list of companies that are actually a fit for your services. No scraped junk. No generic outreach.",
              },
              {
                title: "Outbound outreach",
                description:
                  "We write, send, and manage cold email campaigns on your behalf. Deliverability, follow-ups, and inbox management are handled by us. You don’t need to touch tools, domains, or inboxes.",
              },
              {
                title: "Qualification & booking",
                description:
                  "Interested prospects are filtered and booked directly into your calendar. You only speak with companies that want to have the conversation. You show up prepared and close.",
              },
            ]}
          />
        </Container>
      </Section>

      {/* WHO THIS IS FOR / NOT FOR */}
      <Section divider>
        <Container>
          <h2 className="mb-12 text-3xl font-medium tracking-tight sm:text-4xl">Is this a fit?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-8">
                <p className="mb-6 font-medium text-foreground">This is for you if:</p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-color)]" />
                    <span>You sell AI implementation or automation services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-color)]" />
                    <span>Your deals are high-value and relationship-driven</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-color)]" />
                    <span>You want more qualified sales conversations without hiring SDRs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 opacity-80">
              <CardContent className="p-8">
                <p className="mb-6 font-medium text-foreground">This is not for you if:</p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <span>You sell low-ticket or consumer services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <span>You want instant volume over quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <span>You’re looking for “growth hacks”</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* WHY AVERIMARKETING */}
      <Section divider>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Why AveriMarketing</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We’re not a general lead gen agency.
              </p>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We work exclusively with AI consultants and automation agencies. That means we understand:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>longer sales cycles</li>
                <li>technical buyers</li>
                <li>the difference between interest and intent</li>
              </ul>
              <p>
                Our focus is simple: <span className="text-foreground">relevant conversations that turn into real opportunities.</span>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SOCIAL PROOF / EARLY STAGE */}
      <Section divider>
        <Container>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Early campaigns. Focused execution.</h2>
            <div className="mt-6 space-y-4 max-w-3xl text-lg text-muted-foreground">
              <p>
                We’re currently working with a small number of AI-focused firms and running tightly controlled outbound campaigns.
              </p>
              <p>
                No inflated case studies. No borrowed logos.
              </p>
              <p className="font-medium text-foreground">
                Just clean execution and continuous improvement.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <CtaBand
        title="Let’s see if this makes sense."
        description="If you’re an AI implementation consultant looking for more qualified sales conversations, we can walk you through how this would work for you."
        primary={{ href: BOOK_CALL_URL, label: "Book a call" }}
        primaryMode="book"
        secondaryDescription="Short call. No pressure. No obligation."
      />
    </>
  );
}

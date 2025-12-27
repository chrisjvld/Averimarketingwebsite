import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Stepper } from "@/components/stepper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorksPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="How it works"
            title="Done-for-you outbound, delivered in clear steps."
            description="We handle the infrastructure, targeting, campaigns, follow-ups, and optimization. You take the sales calls."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <Stepper
                variant="detailed"
                steps={[
                  {
                    title: "Alignment & access",
                    description: "Quick kickoff to confirm targeting, offers, and calendar access for booking meetings.",
                  },
                  {
                    title: "Inbox setup + deliverability",
                    description: "Set up sending infrastructure, warm up responsibly, and establish health monitoring.",
                  },
                  {
                    title: "Campaign creation",
                    description: "Build lists, write copy, and set up sequences and follow-ups.",
                  },
                  {
                    title: "Launch & follow-ups",
                    description: "Launch campaigns, manage replies, and keep deliverability healthy as volume ramps.",
                  },
                  {
                    title: "Optimization & booked meetings",
                    description: "Test, iterate, and report—focused on replies, positive replies, and meetings booked.",
                  },
                ]}
              />
            </div>
            <div className="lg:col-span-4">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Your involvement</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Initial alignment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Calendar access</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Sales calls only</span>
                    </li>
                  </ul>
                  <div className="mt-4 rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted-foreground">What we handle</p>
                    <p className="mt-1 text-sm text-foreground/80">
                      Inboxes, deliverability, lists, campaigns, follow-ups, optimization, and reporting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


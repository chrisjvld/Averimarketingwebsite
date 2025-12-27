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
            title="A calm, measurable outbound process."
            description="We build a reliable cold email system and improve it based on replies and meetings—not guesses."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <Stepper
                variant="detailed"
                steps={[
                  {
                    title: "Kickoff + alignment",
                    description: "Confirm targeting, positioning, constraints, and how meetings will be handled.",
                  },
                  {
                    title: "Inbox setup + deliverability",
                    description: "Set up sending infrastructure, warm up responsibly, and establish health monitoring.",
                  },
                  {
                    title: "Lead sourcing + list building",
                    description: "Build a targeted list with clean data and practical segmentation.",
                  },
                  {
                    title: "Campaigns + follow-ups",
                    description: "Write copy, build sequences, launch, and manage responses.",
                  },
                  {
                    title: "Testing + iteration",
                    description: "Run structured tests and improve based on reply quality and booked meetings.",
                  },
                ]}
              />
            </div>
            <div className="lg:col-span-4">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>What you get</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Inbox setup and deliverability monitoring</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Targeted lead lists and segmentation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Cold email copy + follow-up sequences</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Weekly reporting on replies and meetings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


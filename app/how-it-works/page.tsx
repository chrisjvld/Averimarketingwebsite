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
            title="A lightweight workflow with clear checkpoints."
            description="Simple steps that keep decisions explicit and work moving forward."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <Stepper
                variant="detailed"
                steps={[
                  { title: "Kickoff", description: "Align on goals, constraints, and what we’re shipping." },
                  { title: "Plan", description: "Define scope and a short sequence of deliverables." },
                  { title: "Execute", description: "Build in small increments with clear review points." },
                  { title: "Refine", description: "Apply feedback, polish, and finalize handoff." },
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
                      <span>Clear scope and priorities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Weekly progress updates</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Implementation-ready deliverables</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Documentation that stays readable</span>
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


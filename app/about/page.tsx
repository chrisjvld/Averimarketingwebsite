import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="About"
            title="Outbound done with discipline."
            description="We build cold email systems with a deliverability-first approach and clear reporting."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  AveriMarketing helps B2B teams book more qualified sales calls using cold email.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We don’t rely on hype. We focus on fundamentals: deliverability, targeting, clear copy, and steady
                  iteration based on replies and booked meetings.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We can’t guarantee results, but we can run a consistent process and communicate clearly about what’s
                  working and what we’re changing.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-medium">How we work</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="text-xs text-muted-foreground">Clarity</p>
                    <p className="mt-1 text-sm">Simple plans, documented changes.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="text-xs text-muted-foreground">Deliverability</p>
                    <p className="mt-1 text-sm">Protect reputation before scaling volume.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="text-xs text-muted-foreground">Iteration</p>
                    <p className="mt-1 text-sm">Test, learn, improve—every week.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle>Process-first</CardTitle>
                <CardDescription>Repeatable systems over shortcuts.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Tight workflows, responsible sending, and clear ownership.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle>Measured</CardTitle>
                <CardDescription>Decisions tied to outcomes.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                We track deliverability, replies, positive replies, and meetings.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle>Collaborative</CardTitle>
                <CardDescription>Easy handoffs and feedback loops.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Short reviews, clear edits, and documented changes.
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3 sm:gap-6 sm:p-8">
            <div>
              <p className="text-xs text-muted-foreground">Focus</p>
              <p className="mt-2 text-sm font-medium">Booked meetings</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Cadence</p>
              <p className="mt-2 text-sm font-medium">Weekly iteration</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Reporting</p>
              <p className="mt-2 text-sm font-medium">Clear, readable updates</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


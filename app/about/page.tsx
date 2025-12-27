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
            title="Done-for-you outbound, built for consistency."
            description="Deliverability-first cold email systems, managed end-to-end with calm reporting."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                AveriMarketing helps B2B companies book more qualified sales calls using cold email.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We run outbound as a done-for-you service. Clients don’t need to manage tools, inboxes, or campaigns.
                Meetings can be booked directly into the client’s calendar.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We focus on fundamentals—deliverability, targeting, messaging, follow-ups, and iteration—measured in
                replies, positive replies, and meetings booked. We don’t guarantee outcomes.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-medium">Approach</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="text-xs text-muted-foreground">Done-for-you delivery</p>
                    <p className="mt-1 text-sm">We handle setup, campaigns, and iteration.</p>
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
                <CardTitle>Hands-off</CardTitle>
                <CardDescription>You don’t run outbound.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                We manage inboxes, lists, campaigns, and follow-ups end-to-end.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle>Measured</CardTitle>
                <CardDescription>Decisions tied to outcomes.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                We track deliverability health, replies, positive replies, and meetings booked.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle>Clear reporting</CardTitle>
                <CardDescription>Simple weekly updates.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                What changed, what we learned, and what’s next.
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


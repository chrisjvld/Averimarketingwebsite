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
            title="A small team with a systems mindset."
            description="We prefer simple frameworks, strong writing, and consistent execution."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                AveriMarketing is built around clarity: what we’re doing, why it matters, and what happens next.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We keep process lightweight, but we take craft seriously—clean layouts, consistent language, and
                deliverables that teams can actually use.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-medium">Principles</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="text-xs text-muted-foreground">Communication</p>
                    <p className="mt-1 text-sm">Short updates, clear decisions.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="text-xs text-muted-foreground">Quality</p>
                    <p className="mt-1 text-sm">Polish without noise.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="text-xs text-muted-foreground">Continuity</p>
                    <p className="mt-1 text-sm">Systems you can keep using.</p>
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
                <CardTitle>Response-first</CardTitle>
                <CardDescription>Fast, clear follow-through.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Communication stays tight so work keeps moving.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle>Iterative</CardTitle>
                <CardDescription>Small steps, frequent reviews.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                We ship in increments to reduce friction.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle>Systems-driven</CardTitle>
                <CardDescription>Templates that hold up.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Reusable structure that stays consistent over time.
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3 sm:gap-6 sm:p-8">
            <div>
              <p className="text-xs text-muted-foreground">Working style</p>
              <p className="mt-2 text-sm font-medium">Direct and calm</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Delivery</p>
              <p className="mt-2 text-sm font-medium">Consistent cadence</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Output</p>
              <p className="mt-2 text-sm font-medium">Clean handoffs</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { title: "Inbox setup + deliverability", description: "Domains, inboxes, warmup, and ongoing health checks." },
  { title: "Lead sourcing + list building", description: "Targeted prospect lists with clean, validated data." },
  { title: "Campaign strategy", description: "Segmentation, offers, sequencing, and sending plan." },
  { title: "Cold email copywriting", description: "Clear, direct copy built for replies and real conversations." },
  { title: "Follow-up systems", description: "Multi-touch sequences that stay respectful and effective." },
  { title: "Testing + iteration", description: "Continuous improvements based on reply and meeting data." },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Services"
            title="End-to-end outbound cold email."
            description="We build and manage the full system—from deliverability to lists to copy to iteration."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="h-full">
                <CardHeader className="space-y-2">
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 hover:underline"
                  >
                    Book a call <ArrowRight className="h-4 w-4 opacity-70" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-xl font-medium tracking-tight sm:text-2xl">FAQ</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Straight answers to common questions.
              </p>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What does “end-to-end” include?</AccordionTrigger>
                  <AccordionContent>
                    Deliverability setup and monitoring, lead sourcing and list building, campaign strategy, cold email
                    copywriting, follow-ups, and ongoing testing/iteration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What outcomes do you optimize for?</AccordionTrigger>
                  <AccordionContent>
                    Replies, positive replies, and booked meetings—while keeping deliverability healthy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do you protect deliverability?</AccordionTrigger>
                  <AccordionContent>
                    We start with inbox setup and warmup, ramp volume carefully, and monitor bounces, spam signals, and
                    inbox health as part of ongoing management.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you guarantee results?</AccordionTrigger>
                  <AccordionContent>
                    No. We can’t guarantee outcomes, but we run a disciplined process focused on measurable signals and
                    continuous improvement.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


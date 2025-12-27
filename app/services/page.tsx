import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { title: "Positioning", description: "Clear messaging, tight structure, and consistent language." },
  { title: "Web & landing pages", description: "Minimal pages with strong hierarchy and clean UX." },
  { title: "Content systems", description: "Templates and guidelines that keep output consistent." },
  { title: "Campaign support", description: "Planning, execution, and delivery coordination." },
  { title: "Analytics basics", description: "Simple tracking and readable reporting." },
  { title: "Design refresh", description: "Subtle UI updates for a more premium feel." },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Services"
            title="Focused offerings, delivered with care."
            description="A small set of services designed for clarity, speed, and consistent results."
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
                    Learn more <ArrowRight className="h-4 w-4 opacity-70" />
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
                A few quick answers. If you’re unsure, the contact form is the fastest path.
              </p>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do engagements start?</AccordionTrigger>
                  <AccordionContent>We align on scope, timeline, and a simple weekly cadence.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do you handle feedback?</AccordionTrigger>
                  <AccordionContent>Short review cycles with clear decisions and next steps.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What do deliverables look like?</AccordionTrigger>
                  <AccordionContent>Clean docs, design files (when needed), and implementation-ready assets.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can you work with existing teams?</AccordionTrigger>
                  <AccordionContent>Yes. We integrate with your tools and keep communication lightweight.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


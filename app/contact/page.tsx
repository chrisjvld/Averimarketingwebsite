"use client";

import * as React from "react";

import { BOOK_CALL_URL } from "@/lib/links";
import { BookCallButton } from "@/components/book-call";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          eyebrow="Contact"
          title="Book a call."
          description="We’ll review your setup and reply within 24–48 hours."
        />

        <div className="mt-10 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>What happens next</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-base font-medium text-foreground">Ready to start?</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use our scheduling link to find a time that works for you.
                </p>
                <div className="mt-4">
                  <BookCallButton className="w-full bg-[var(--accent-color)] text-white hover:bg-[var(--accent-color)]/90 h-10 text-sm font-medium">
                    Book a call
                  </BookCallButton>
                </div>
                <p className="mt-3 break-all text-xs text-muted-foreground opacity-70">
                  {BOOK_CALL_URL}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Call format</p>
                  <p className="mt-1 text-sm text-foreground">15–20 minutes, remote</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">We’ll cover</p>
                  <p className="mt-1 text-sm text-foreground">
                    Deliverability, targeting, offers, volume, and what “qualified” means for you.
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="mt-1 text-sm text-foreground">christoffer@averimarketing.com</p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <p className="font-medium text-foreground">Good fit if you want</p>
                <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                    <span>Booked meetings without running outbound yourself</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                    <span>A deliverability-first approach</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                    <span>Clear reporting and steady iteration</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

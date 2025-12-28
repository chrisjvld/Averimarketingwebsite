"use client";

import * as React from "react";

import { BOOK_CALL_URL } from "@/lib/links";
import { BookCallButton } from "@/components/book-call";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.message.trim()) errors.message = "Please enter a short message.";
  return errors;
}

export default function ContactPage() {
  const [values, setValues] = React.useState<FormState>({ name: "", email: "", message: "" });
  const [touched, setTouched] = React.useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const errors = validate(values);
  const hasErrors = Object.keys(errors).length > 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <Section>
      <Container>
        <PageHeader
          eyebrow="Contact"
          title="Book a call."
          description="We’ll review your setup and reply within 24–48 hours."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
          <Card className="lg:col-span-7">
            <CardHeader>
              <CardTitle>Request a call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="-mt-2 mb-5 text-sm leading-relaxed text-muted-foreground">
                Share a few details. If it’s a fit, we’ll send a scheduling link and confirm calendar access for booking
                meetings.
              </p>
              {submitted ? (
                <div className="rounded-xl border border-border bg-background p-6">
                  <p className="text-sm font-medium">Request received</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Thanks—your request has been saved. We’ll reply with a scheduling link and a couple of quick
                    questions.
                  </p>
                  <div className="mt-5">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setValues({ name: "", email: "", message: "" });
                        setTouched({});
                      }}
                    >
                      Send another request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5" noValidate>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {touched.name && errors.name ? (
                      <p id="name-error" className="text-sm text-destructive">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {touched.email && errors.email ? (
                      <p id="email-error" className="text-sm text-destructive">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="What do you sell, who do you target, and what does a qualified meeting look like? If you have a calendar link, include it."
                      value={values.message}
                      onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                      onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {touched.message && errors.message ? (
                      <p id="message-error" className="text-sm text-destructive">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      {hasErrors ? "Please complete the fields above." : " "}
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]"
                    >
                      {isSubmitting ? "Sending…" : "Book a call"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="lg:col-span-5">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>What happens next</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm text-muted-foreground">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs text-muted-foreground">Prefer to book now?</p>
                  <p className="mt-1 text-sm text-foreground/80">Use our scheduling link (opens in a new tab).</p>
                  <div className="mt-3">
                    <BookCallButton className="w-full bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]">
                      Book a call
                    </BookCallButton>
                  </div>
                  <p className="mt-3 break-all text-xs text-muted-foreground">{BOOK_CALL_URL}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call format</p>
                  <p className="mt-1 text-sm text-foreground/80">15–20 minutes, remote</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">We’ll cover</p>
                  <p className="mt-1 text-sm text-foreground/80">
                    Deliverability, targeting, offers, volume, and what “qualified” means for you.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="mt-1 text-sm text-foreground/80">hello@averimarketing.example</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs text-muted-foreground">Good fit if you want</p>
                  <ul className="mt-2 space-y-2 text-sm text-foreground/80">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Booked meetings without running outbound yourself</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>A deliverability-first approach</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span>Clear reporting and steady iteration</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}


import * as React from "react";

import { cn } from "@/lib/utils";

export function Stepper({
  steps,
  variant = "simple",
  className,
}: {
  steps: Array<{ title: string; description?: string }>;
  variant?: "simple" | "detailed";
  className?: string;
}) {
  const isDetailed = variant === "detailed";
  return (
    <ol
      className={cn(
        "grid gap-4",
        isDetailed ? "md:grid-cols-1" : "md:grid-cols-3 md:gap-6",
        className
      )}
    >
      {steps.map((step, idx) => (
        <li key={step.title} className="relative">
          <div
            className={cn(
              "relative rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/30",
              // horizontal connectors (simple)
              !isDetailed &&
                idx > 0 &&
                "md:before:content-[''] md:before:absolute md:before:-left-3 md:before:top-1/2 md:before:h-px md:before:w-3 md:before:bg-border",
              // vertical connectors (detailed)
              isDetailed &&
                "md:pl-8 md:before:content-[''] md:before:absolute md:before:left-3 md:before:top-6 md:before:h-2 md:before:w-2 md:before:rounded-full md:before:bg-[var(--accent-color)]/70",
              isDetailed &&
                idx !== steps.length - 1 &&
                "md:after:content-[''] md:after:absolute md:after:left-3.5 md:after:top-10 md:after:bottom-6 md:after:w-px md:after:bg-border"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-medium">
                {idx + 1}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{step.title}</p>
                {step.description ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                ) : null}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}


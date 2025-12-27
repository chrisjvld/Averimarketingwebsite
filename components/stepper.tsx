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
  return (
    <ol
      className={cn(
        "grid gap-4 md:grid-cols-3",
        variant === "detailed" && "md:grid-cols-1",
        className
      )}
    >
      {steps.map((step, idx) => (
        <li key={step.title} className="relative">
          <div className="rounded-xl border border-border bg-card p-5">
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


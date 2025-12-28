import * as React from "react";

import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-10 rounded-full bg-[var(--accent-color)]/50" aria-hidden="true" />
        {eyebrow ? <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p> : null}
      </div>
      <h1 className="mt-4 text-pretty text-3xl font-medium tracking-tight sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </header>
  );
}


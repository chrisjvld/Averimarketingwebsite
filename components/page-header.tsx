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
      {eyebrow ? <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p> : null}
      <h1 className="mt-3 text-pretty text-3xl font-medium tracking-tight sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </header>
  );
}


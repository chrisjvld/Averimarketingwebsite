import * as React from "react";

import { cn } from "@/lib/utils";

export function Section({
  className,
  divider,
  ...props
}: React.HTMLAttributes<HTMLElement> & { divider?: boolean }) {
  return (
    <section
      className={cn("py-14 sm:py-20", divider && "border-t border-border", className)}
      {...props}
    />
  );
}


import * as React from "react";

import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)} aria-label="AveriMarketing">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", markClassName)}
        aria-hidden="true"
        focusable="false"
      >
        {/* Abstract sail mark (minimal, brand-like) */}
        <path
          d="M4 22.5c7.3-1.3 13.4-6.7 16.4-14.6.3-.7 1.4-.7 1.7 0 .8 2 .9 4.4.2 6.7-1.7 5.7-6.7 9.6-12.3 9.6H4Z"
          fill="#0B4F7A"
        />
        <path
          d="M6.2 22.5c6.2-2.2 11-7.2 13.2-13.7.2-.7-.4-1.4-1.1-1.1C11.8 9.9 6.7 14.7 4.5 20.9c-.2.6.2 1.3.9 1.5.3.1.6.1.8.1Z"
          fill="#2563EB"
        />
        <path
          d="M4 22.5h7.9c2.5 0 4.7-.6 6.7-1.7-2.2.1-4.4-.2-6.5-1.1-2.7-1.1-5.2-1.3-8.1-.1Z"
          fill="#111827"
          opacity="0.9"
        />
      </svg>

      <span
        className={cn(
          "text-sm font-semibold tracking-tight text-foreground",
          wordmarkClassName
        )}
      >
        AveriMarketing
      </span>
    </span>
  );
}


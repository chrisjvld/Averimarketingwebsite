import * as React from "react";

import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
  size = "md",
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  size?: "sm" | "md";
}) {
  const iconSize = size === "sm" ? 26 : 30;
  return (
    <span className={cn("inline-flex items-center gap-2", className)} aria-label="AveriMarketing">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", markClassName)}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="averi-blue" x1="9" y1="6" x2="26" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7CC6F0" />
            <stop offset="0.55" stopColor="#1F7FB5" />
            <stop offset="1" stopColor="#0B4F7A" />
          </linearGradient>
        </defs>

        {/* Sail mark (approximation; swap to exact SVG/PNG when available) */}
        <path
          d="M6.5 26.8c8.5-1.5 15.6-7.8 19.1-17.1.3-.8 1.5-.8 1.8 0 1 2.4 1.1 5.1.2 7.8-2 6.7-7.9 11.3-14.5 11.3H6.5Z"
          fill="#0B4F7A"
        />
        <path
          d="M8.8 26.6c7.1-2.5 12.5-8.2 15-15.7.3-.9-.6-1.7-1.5-1.4-7.5 2.6-13.3 8.1-15.9 15.3-.3.8.3 1.6 1.2 1.8.4.1.8.1 1.2 0Z"
          fill="url(#averi-blue)"
        />
        <path
          d="M6.5 26.8h9.2c2.9 0 5.6-.7 7.9-2-2.6.1-5.2-.3-7.7-1.3-3.1-1.3-6.2-1.5-9.4-.1Z"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>

      <span
        className={cn(
          "font-serif text-[15px] font-semibold tracking-tight text-foreground sm:text-[16px]",
          wordmarkClassName
        )}
      >
        AveriMarketing
      </span>
    </span>
  );
}


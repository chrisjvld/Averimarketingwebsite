"use client";

import * as React from "react";

import { BOOK_CALL_URL } from "@/lib/links";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function calendlyEmbedUrl() {
  const url = new URL(BOOK_CALL_URL);
  url.searchParams.set("hide_event_type_details", "1");
  url.searchParams.set("hide_gdpr_banner", "1");
  return url.toString();
}

export function BookCallButton({
  children = "Book a call",
  className,
  ...buttonProps
}: Omit<ButtonProps, "asChild"> & { children?: React.ReactNode }) {
  return (
    <BookCallDialog
      trigger={
        <Button className={className} {...buttonProps}>
          {children}
        </Button>
      }
    />
  );
}

export function BookCallLink({
  children = "Book a call",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <BookCallDialog
      trigger={
        <button
          type="button"
          className={cn("inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline", className)}
        >
          {children}
        </button>
      }
    />
  );
}

export function BookCallDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="p-0">
        <div className="p-6 pb-4">
          <DialogHeader>
            <DialogTitle>Book a call</DialogTitle>
            <DialogDescription>Choose a time. This opens and schedules directly with Calendly.</DialogDescription>
          </DialogHeader>
        </div>
        <div className="border-t border-border p-3 sm:p-4">
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <iframe
              title="Calendly scheduling"
              src={calendlyEmbedUrl()}
              className="h-[70vh] w-full"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            If the embed doesn’t load, open{" "}
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Calendly
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}


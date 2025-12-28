import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { SmartLink } from "@/components/smart-link";
import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/book-call";

export function CtaBand({
  title,
  description,
  primary,
  secondary,
  primaryMode = "link",
}: {
  title: string;
  description?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  primaryMode?: "link" | "book";
}) {
  return (
    <Section divider>
      <Container>
        <div className="rounded-2xl border border-border bg-card px-6 py-10 sm:px-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="text-pretty text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
              {description ? (
                <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryMode === "book" ? (
                  <BookCallButton className="bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]">
                    {primary.label}
                  </BookCallButton>
                ) : (
                  <Button
                    asChild
                    className="bg-[var(--accent-color,#2563eb)] text-white hover:bg-[color-mix(in_oklab,var(--accent-color,#2563eb),black_10%)]"
                  >
                    <SmartLink href={primary.href}>{primary.label}</SmartLink>
                  </Button>
                )}
                {secondary ? (
                  <Button asChild variant="outline">
                    <SmartLink href={secondary.href}>{secondary.label}</SmartLink>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


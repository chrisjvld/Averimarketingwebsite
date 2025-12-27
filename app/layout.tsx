import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "AveriMarketing",
  description: "We help B2B companies book more qualified sales calls using cold email.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="min-h-dvh bg-background text-foreground">
          <SiteNavbar />
          <main className="pt-16">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Roboto_Mono } from "next/font/google";
import { ShieldCheck } from "lucide-react";
import { AnalyticsConsent } from "@/components/providers/AnalyticsConsent";
import { AxeDev } from "@/components/providers/AxeDev";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { LegalFooter } from "@/components/legal/LegalFooter";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://1099desk.com"),
  title: "1099desk - Financial Calculators for US Freelancers",
  description: "Free estimated tax, invoice, rate, and project calculators for US freelancers.",
  alternates: { canonical: "/" },
  verification: {
    google: "uYoesI3DN-5IxZxUoneJdKRgIqQq2O2ox3tpDFfkjZU",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/brand/1099desk-mark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieYesId = process.env.NEXT_PUBLIC_COOKIEYES_ID;

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {cookieYesId ? (
          <Script
            src={`https://cdn.cookieyes.com/client_data/${cookieYesId}/script.js`}
            strategy="beforeInteractive"
          />
        ) : null}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">
          Skip to content
        </a>
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3" aria-label="Primary">
            <a href="/" className="group inline-flex items-center gap-3 text-lg font-black text-slate-950 no-underline">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-[#07110f] shadow-lg shadow-slate-900/15">
                <img src="/brand/1099desk-mark.svg" alt="" aria-hidden="true" className="h-full w-full" />
              </span>
              <span>
                1099desk
                <span className="block text-[0.68rem] font-bold leading-3 text-teal-800">freelance finance suite</span>
              </span>
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
              <a className="rounded-md px-3 py-2 text-slate-700 no-underline hover:bg-slate-100" href="/self-employment-tax-calculator">SE Tax</a>
              <a className="rounded-md px-3 py-2 text-slate-700 no-underline hover:bg-slate-100" href="/quarterly-estimated-tax-calculator">Quarterly Tax</a>
              <a className="rounded-md px-3 py-2 text-slate-700 no-underline hover:bg-slate-100" href="/invoice-generator">Invoice</a>
              <a className="rounded-md px-3 py-2 text-slate-700 no-underline hover:bg-slate-100" href="/about">About</a>
              <span className="hidden items-center gap-2 rounded-md border border-teal-700/20 bg-teal-50 px-3 py-2 text-teal-900 md:inline-flex">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                Compliance-first
              </span>
            </div>
          </nav>
        </header>
        <div id="main-content" className="grow">
          {children}
        </div>
        <LegalFooter />
        <CookieBanner />
        <AnalyticsConsent />
        <AxeDev />
      </body>
    </html>
  );
}

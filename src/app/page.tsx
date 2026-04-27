import { ToolCard } from "@/components/shared/ToolCard";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const tools = [
  ["Self-employment tax calculator", "Estimate SE tax, income tax, state tax, and quarterly payments.", "/self-employment-tax-calculator"],
  ["Quarterly estimated tax calculator", "Plan estimated quarterly payments using 2026 IRS assumptions.", "/quarterly-estimated-tax-calculator"],
  ["Freelance hourly rate calculator", "Translate income goals and billable hours into a planning rate.", "/freelance-hourly-rate-calculator"],
  ["Invoice generator", "Generate an invoice PDF locally in your browser without server transmission.", "/invoice-generator"],
  ["Project profit margin calculator", "Estimate project margin after costs, labor, and tax reserve.", "/project-profit-margin-calculator"],
  ["Retainer vs hourly calculator", "Compare recurring retainers with hourly billing scenarios.", "/retainer-vs-hourly-calculator"],
  ["1099 vs W2 calculator", "Compare estimated contractor and employee net value.", "/1099-vs-w2-calculator"],
];

const proofPoints: [string, string, LucideIcon][] = [
  ["IRS-linked", "2026 source citations travel with each tax estimate", BookOpenCheck],
  ["Client-side invoices", "PDF creation stays in the browser by design", LockKeyhole],
  ["Consent-gated", "Analytics and ads wait for cookie consent", ShieldCheck],
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate min-h-[86vh] overflow-hidden bg-stone-950 text-white">
        <img
          src="/images/freelancer-finance-workspace.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="hero-mask absolute inset-0 -z-10" />
        <div className="surface-grid absolute inset-0 -z-10 opacity-20" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-20 lg:grid-cols-[1fr_420px] lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-xs font-black text-teal-50 backdrop-blur-md">
              <ShieldCheck aria-hidden="true" className="h-4 w-4" />
              Compliance-first finance tools
            </p>
            <h1 className="mt-6 text-6xl font-black leading-[0.95] tracking-normal text-white md:text-8xl">
              1099desk
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-stone-100 md:text-2xl md:leading-9">
              A command center for US freelancers to model taxes, price work, compare income paths,
              and generate private invoices with legal guardrails visible at every step.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-stone-300">
              Results are informational estimates only and are not tax, legal, or financial advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/self-employment-tax-calculator"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-stone-950 no-underline shadow-2xl shadow-black/25"
              >
                Start estimating
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="/invoice-generator"
                className="inline-flex items-center gap-2 rounded-md border border-white/22 bg-white/10 px-5 py-3 text-sm font-black text-white no-underline backdrop-blur-md"
              >
                Build invoice
              </a>
            </div>
          </div>

          <aside className="rounded-xl border border-white/14 bg-black/36 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl" aria-label="Live planning snapshot">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-teal-200">Live planning snapshot</p>
                <h2 className="mt-1 text-2xl font-black">Freelance tax cockpit</h2>
              </div>
              <Sparkles aria-hidden="true" className="h-5 w-5 text-amber-300" />
            </div>
            <div className="mt-5 grid gap-3">
              {[
                ["Estimated total tax", "$21,793", "Schedule SE style model", "bg-teal-300"],
                ["Quarterly reserve", "$5,448", "Cash-flow planning", "bg-amber-300"],
                ["Invoice privacy", "Local", "No server transmission", "bg-indigo-300"],
              ].map(([label, value, meta, color]) => (
                <div key={label} className="rounded-lg border border-white/12 bg-white/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold text-stone-300">{label}</p>
                      <p className="mt-1 text-3xl font-black text-white">{value}</p>
                      <p className="mt-1 text-xs text-stone-400">{meta}</p>
                    </div>
                    <span className={`h-12 w-1.5 rounded-full ${color}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-amber-300/45 bg-amber-200/12 p-3 text-xs leading-5 text-amber-50">
              <div className="flex gap-2">
                <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Estimates only. IRS source links and CPA disclaimers remain attached to results.</span>
              </div>
            </div>
          </aside>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-y border-white/10 bg-black/34 py-3 backdrop-blur-md">
          <div className="ticker-track flex w-[200%] gap-8 text-xs font-black uppercase tracking-normal text-stone-200">
            {[...proofPoints, ...proofPoints, ...proofPoints, ...proofPoints].map(([label], index) => (
              <span key={`${label}-${index}`} className="inline-flex items-center gap-2">
                <BadgeCheck aria-hidden="true" className="h-4 w-4 text-teal-200" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-6xl px-4 pb-12" aria-label="Trust and compliance highlights">
        <div className="grid gap-4 md:grid-cols-3">
          {proofPoints.map(([label, copy, Icon]) => (
            <div key={label as string} className="premium-card rounded-xl p-5">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-stone-950 text-white">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="mt-4 text-lg font-black text-stone-950">{label}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-[0.72fr_1.28fr]" aria-label="Calculator tools">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="kicker">
            <Calculator aria-hidden="true" className="h-4 w-4" />
            Tool suite
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-stone-950">
            Choose the next decision to model
          </h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Every calculator keeps the disclosure, IRS source label, and last-updated date inside
            the workflow. The interface is designed for repeated, practical use.
          </p>
          <div className="mt-6 rounded-xl border border-stone-200 bg-stone-950 p-5 text-white shadow-2xl shadow-stone-900/10">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness aria-hidden="true" className="h-5 w-5 text-teal-200" />
              <p className="font-black">Freelancer operating layer</p>
            </div>
            <div className="mt-5 grid gap-3 text-sm">
              {["Tax planning", "Pricing math", "Private invoicing"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-stone-200">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-teal-200" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map(([title, description, href]) => (
            <ToolCard key={href} title={title} description={description} href={href} />
          ))}
          <a
            href="/affiliate-disclosure"
            className="rounded-xl border border-dashed border-stone-300 bg-white/55 p-5 text-stone-700 no-underline"
          >
            <FileText aria-hidden="true" className="h-6 w-6 text-amber-700" />
            <p className="mt-4 text-lg font-black text-stone-950">Legal disclosure center</p>
            <p className="mt-2 text-sm leading-6">
              Review affiliate, cookie, terms, and privacy language before launch campaigns.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}

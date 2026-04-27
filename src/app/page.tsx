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

const planningRows = [
  ["Gross income", "$95,000", "input"],
  ["Expenses", "$18,400", "deductible"],
  ["Estimated total tax", "$21,793", "result"],
  ["Quarterly reserve", "$5,448", "planning"],
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#07110f] text-white">
        <div className="hero-field absolute inset-0 -z-10" />
        <div className="mx-auto grid min-h-[86vh] max-w-6xl gap-12 px-4 pb-20 pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-3 py-1.5 text-xs font-black text-teal-100 shadow-sm backdrop-blur">
              <ShieldCheck aria-hidden="true" className="h-4 w-4" />
              Compliance-first finance tools
            </p>
            <h1 className="mt-7 text-6xl font-black leading-[0.94] tracking-normal text-white md:text-8xl">
              1099desk
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-slate-100 md:text-2xl md:leading-9">
              A precise operating desk for freelancers to model taxes, price projects, compare income paths,
              and create private invoices with legal guardrails built into the workflow.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
              Results are informational estimates only and are not tax, legal, or financial advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/self-employment-tax-calculator"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-slate-950 no-underline shadow-2xl shadow-black/25"
              >
                Start estimating
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="/invoice-generator"
                className="inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/[0.06] px-5 py-3 text-sm font-black text-white no-underline backdrop-blur hover:bg-white/10"
              >
                Build invoice
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="dashboard-frame overflow-hidden rounded-2xl border border-white/12 bg-[#0c1513]/90 shadow-2xl shadow-black/35">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                </div>
                <p className="text-xs font-black uppercase tracking-normal text-slate-400">Planning workspace</p>
              </div>
              <div className="grid gap-4 p-5 lg:grid-cols-[1.1fr_0.9fr]">
                <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4" aria-label="Estimated tax model preview">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-normal text-teal-200">Estimated total tax</p>
                      <p className="mt-2 text-4xl font-black">$21,793</p>
                      <p className="mt-1 text-xs text-slate-400">Schedule SE style model</p>
                    </div>
                    <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-black text-teal-100">
                      2026
                    </span>
                  </div>
                  <div className="mt-7 space-y-4">
                    {planningRows.map(([label, value, meta]) => (
                      <div key={label} className="grid grid-cols-[1fr_auto] gap-3">
                        <div>
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-xs font-bold text-slate-300">{label}</p>
                            <p className="text-xs text-slate-500">{meta}</p>
                          </div>
                          <div className="mt-2 h-2 rounded-full bg-white/10">
                            <div className="h-2 rounded-full bg-teal-300" style={{ width: label.includes("Expenses") ? "42%" : label.includes("Quarterly") ? "34%" : "76%" }} />
                          </div>
                        </div>
                        <p className="text-sm font-black text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="grid gap-4" aria-label="Product safeguards preview">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-black uppercase tracking-normal text-slate-400">Invoice privacy</p>
                    <p className="mt-2 text-3xl font-black">Local</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">PDF generation stays client-side with no invoice content transmitted.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs font-black uppercase tracking-normal text-slate-400">Consent state</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-sm font-black text-white">Analytics</span>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-black text-slate-200">Gated</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-black text-white">Ad scripts</span>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-black text-slate-200">Gated</span>
                    </div>
                  </div>
                </section>
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <div className="flex gap-2 text-xs leading-5 text-slate-300">
                  <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-teal-200" />
                  <span>Estimates only. IRS source links and CPA disclaimers remain attached to results.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-y border-white/10 bg-black/28 py-3 backdrop-blur-md">
          <div className="ticker-track flex w-[200%] gap-8 text-xs font-black uppercase tracking-normal text-slate-300">
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
              <span className="grid h-11 w-11 place-items-center rounded-md bg-slate-950 text-white">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="mt-4 text-lg font-black text-slate-950">{label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
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
          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950">
            Choose the next decision to model
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Every calculator keeps the disclosure, IRS source label, and last-updated date inside
            the workflow. The interface is designed for repeated, practical use.
          </p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/10">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness aria-hidden="true" className="h-5 w-5 text-teal-200" />
              <p className="font-black">Freelancer operating layer</p>
            </div>
            <div className="mt-5 grid gap-3 text-sm">
              {["Tax planning", "Pricing math", "Private invoicing"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-200">
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
            className="rounded-xl border border-dashed border-slate-300 bg-white/70 p-5 text-slate-700 no-underline"
          >
            <FileText aria-hidden="true" className="h-6 w-6 text-slate-700" />
            <p className="mt-4 text-lg font-black text-slate-950">Legal disclosure center</p>
            <p className="mt-2 text-sm leading-6">
              Review affiliate, cookie, terms, and privacy language before launch campaigns.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}

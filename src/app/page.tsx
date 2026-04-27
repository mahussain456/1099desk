import { ToolCard } from "@/components/shared/ToolCard";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  DollarSign,
  FileText,
  Gift,
  LockKeyhole,
  Share2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EmailCapture } from "@/components/shared/EmailCapture";

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

const moneyPlanSteps = [
  ["Estimate tax reserve", "Model estimated SE tax, federal tax, state tax, and quarterly reserve."],
  ["Price the work", "Translate income goals and billable hours into a planning rate."],
  ["Send the invoice", "Generate a client-ready invoice PDF locally in the browser."],
];

const viralHooks = [
  ["What should I charge to net $100k?", "Turn an income goal into an estimated hourly rate.", "/freelance-hourly-rate-calculator"],
  ["1099 vs W2: which may pay more?", "Compare contractor and employee scenarios side by side.", "/1099-vs-w2-calculator"],
  ["How much should I save from every invoice?", "Estimate quarterly reserves before cash gets messy.", "/quarterly-estimated-tax-calculator"],
];

const outcomeCards: [string, string, LucideIcon][] = [
  ["Set aside", "Estimated tax reserve", DollarSign],
  ["Charge", "Planning rate targets", Calculator],
  ["Invoice", "Client-ready PDF", FileText],
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
              Build your freelancer money plan in 5 minutes
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-slate-100 md:text-2xl md:leading-9">
              Estimate what to set aside, what to charge, and what to invoice as a US freelancer,
              with legal guardrails visible throughout the workflow.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
              Results are informational estimates only and are not tax, legal, or financial advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/self-employment-tax-calculator"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-slate-950 no-underline shadow-2xl shadow-black/25"
              >
                Build my money plan
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="#freelancer-checklist"
                className="inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/[0.06] px-5 py-3 text-sm font-black text-white no-underline backdrop-blur hover:bg-white/10"
              >
                Get free checklist
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {moneyPlanSteps.map(([title, copy], index) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                  <span className="text-xs font-black text-teal-200">0{index + 1}</span>
                  <p className="mt-2 text-sm font-black text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{copy}</p>
                </div>
              ))}
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

      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="outcome-heading">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="kicker">
              <TrendingUp aria-hidden="true" className="h-4 w-4" />
              Outcome, not calculators
            </p>
            <h2 id="outcome-heading" className="mt-4 text-4xl font-black leading-tight text-slate-950">
              Go from scattered freelance math to one estimated money plan
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              1099desk packages the highest-friction freelancer decisions into a practical flow:
              estimated tax reserve, pricing targets, income-path comparison, and private invoicing.
              The goal is clarity before income, expenses, and client work become harder to untangle.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {outcomeCards.map(([label, copy, Icon]) => (
              <div key={label as string} className="premium-card rounded-xl p-5">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-slate-950 text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xl font-black text-slate-950">{label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
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

      <section className="mx-auto max-w-6xl px-4 pb-16" aria-labelledby="share-heading">
        <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-2xl shadow-slate-900/10 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-black text-teal-100">
                <Share2 aria-hidden="true" className="h-4 w-4" />
                Built for shareable decisions
              </p>
              <h2 id="share-heading" className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-4xl">
                Create numbers freelancers actually want to talk about
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              These tools are framed around emotional questions: charge more, save enough, compare offers,
              and avoid surprise cash-flow stress.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {viralHooks.map(([title, copy, href]) => (
              <a key={title} href={href} className="rounded-xl border border-white/10 bg-white/[0.05] p-5 text-white no-underline transition hover:bg-white/[0.08]">
                <p className="text-lg font-black">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-teal-200">
                  Open calculator <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
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

      <section className="mx-auto max-w-6xl px-4 pb-16" aria-labelledby="pro-kit-heading">
        <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div>
            <p className="kicker">
              <Gift aria-hidden="true" className="h-4 w-4" />
              Monetization-ready kit
            </p>
            <h2 id="pro-kit-heading" className="mt-4 text-4xl font-black leading-tight text-slate-950">
              1099desk Pro Kit
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A planned paid toolkit for freelancers who want reusable templates alongside the free calculators:
              invoice templates, CPA prep checklist, quarterly payment tracker, deduction organizer, and pricing prompts.
            </p>
            <a
              href="#freelancer-checklist"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-black text-white no-underline"
            >
              Join the launch list
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Quarterly payment tracker",
              "CPA prep checklist",
              "Client pricing worksheet",
              "Invoice and follow-up scripts",
              "Deduction organizer",
              "Rate-raise prompt library",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <ClipboardCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-teal-700" />
                <span className="text-sm font-black text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="freelancer-checklist" className="mx-auto max-w-6xl px-4 pb-16">
        <EmailCapture />
      </section>
    </main>
  );
}

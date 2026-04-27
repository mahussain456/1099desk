import { ToolCard } from "@/components/shared/ToolCard";
import { ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";

const tools = [
  ["Self-employment tax calculator", "Estimate SE tax, income tax, state tax, and quarterly payments.", "/self-employment-tax-calculator"],
  ["Quarterly estimated tax calculator", "Plan estimated quarterly payments using 2026 IRS assumptions.", "/quarterly-estimated-tax-calculator"],
  ["Freelance hourly rate calculator", "Translate income goals and billable hours into a planning rate.", "/freelance-hourly-rate-calculator"],
  ["Invoice generator", "Generate an invoice PDF locally in your browser without server transmission.", "/invoice-generator"],
  ["Project profit margin calculator", "Estimate project margin after costs, labor, and tax reserve.", "/project-profit-margin-calculator"],
  ["Retainer vs hourly calculator", "Compare recurring retainers with hourly billing scenarios.", "/retainer-vs-hourly-calculator"],
  ["1099 vs W2 calculator", "Compare estimated contractor and employee net value.", "/1099-vs-w2-calculator"],
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="kicker">
            <ShieldCheck aria-hidden="true" className="h-4 w-4" />
            Compliance-first finance tools
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.03] tracking-normal text-stone-950 md:text-7xl">
            1099desk
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-stone-700">
            A polished operating desk for US freelancers: tax estimates, invoices, pricing math, and
            project economics with source citations and legal guardrails built into the interface.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
            Results are informational estimates only and are not tax, legal, or financial advice.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/self-employment-tax-calculator"
              className="inline-flex items-center gap-2 rounded-md bg-stone-950 px-5 py-3 text-sm font-extrabold text-white no-underline shadow-xl shadow-stone-900/15"
            >
              Start estimating
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="/invoice-generator"
              className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white/70 px-5 py-3 text-sm font-extrabold text-stone-900 no-underline"
            >
              Build invoice
            </a>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["IRS linked", "Tax tools cite source guidance"],
              ["Private invoice", "PDF runs in your browser"],
              ["Consent gated", "Analytics waits for opt-in"],
            ].map(([label, copy]) => (
              <div key={label} className="rounded-md border border-stone-200/80 bg-white/60 p-3">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-teal-700" />
                <p className="mt-2 text-sm font-black text-stone-950">{label}</p>
                <p className="mt-1 text-xs leading-5 text-stone-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="premium-shell relative overflow-hidden rounded-xl p-4">
          <div className="rounded-lg bg-stone-950 p-4 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-normal text-teal-200">Live planning view</p>
                <h2 className="mt-1 text-xl font-black">Freelance tax cockpit</h2>
              </div>
              <Sparkles aria-hidden="true" className="h-5 w-5 text-amber-300" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Income", "$95k", "Projected"],
                ["Reserve", "$7.4k", "Quarterly"],
                ["Privacy", "Local", "Invoice PDF"],
              ].map(([label, value, meta]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/8 p-3">
                  <p className="text-xs text-stone-300">{label}</p>
                  <p className="mt-1 text-2xl font-black">{value}</p>
                  <p className="mt-1 text-xs text-stone-400">{meta}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md bg-[#fffdf8] p-4 text-stone-950">
              <div className="flex items-center justify-between">
                <p className="font-black">Estimated Results</p>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-black text-amber-900">CPA review</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Self-employment tax", "medium", "$10,890"],
                  ["Federal estimate", "wide", "$9,612"],
                  ["Quarterly payment", "short", "$5,448"],
                ].map(([label, width, value]) => (
                  <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-600">
                        <span>{label}</span>
                      </div>
                      <div className="mt-1 h-2 rounded-full bg-stone-200">
                        <div
                          className={`h-2 rounded-full ${width === "wide" ? "w-10/12 bg-teal-700" : width === "medium" ? "w-8/12 bg-indigo-700" : "w-6/12 bg-coral-700 bg-[#b4533c]"}`}
                        />
                      </div>
                    </div>
                    <span className="font-black">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-2 rounded-md border border-amber-300 bg-amber-50 p-3 text-xs leading-5 text-amber-950">
                <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Estimates only. Not tax, legal, or financial advice. IRS source links stay attached.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16" aria-label="Calculator tools">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="kicker">Tool suite</p>
            <h2 className="mt-3 text-3xl font-black text-stone-950">Choose the next decision to model</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-600">
            Every calculator keeps the disclosure, source label, and last-updated date in the workflow.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map(([title, description, href]) => (
            <ToolCard key={href} title={title} description={description} href={href} />
          ))}
        </div>
      </section>
    </main>
  );
}

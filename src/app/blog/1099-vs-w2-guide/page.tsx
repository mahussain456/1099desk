import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1099 vs W2 Guide | 1099desk",
  description:
    "A practical guide to comparing 1099 contractor income with W2 salary, benefits, taxes, and risk.",
  alternates: { canonical: "/blog/1099-vs-w2-guide" },
};

export default function W2GuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <p className="kicker">Educational guide</p>
      <h1 className="mt-4 text-3xl font-black text-gray-950 md:text-5xl">1099 vs W2 Guide</h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">
        A practical guide to comparing contractor income with salary, benefits, tax burden, and operating risk.
      </p>
      <p className="mt-4 font-semibold text-amber-800">
        Educational content only. Not tax, legal, accounting, or employment advice.
      </p>
      <p className="mt-5 text-base leading-8 text-slate-800">
        People often compare a 1099 offer with a W2 salary by looking only at the headline number. That usually misses the real tradeoff.
        Contractor work may bring more gross income, but it can also shift taxes, benefits, admin time, equipment costs, and downtime risk onto you.
      </p>
      <p className="mt-5 text-base leading-8 text-slate-800">
        W2 roles may include payroll withholding, employer tax contributions, insurance, paid time off, and retirement matching.
        Contractor work may offer flexibility or higher upside, but it usually requires better recordkeeping and stronger cash management.
      </p>
      <p className="mt-5 text-base leading-8 text-slate-800">
        The right comparison is not just salary versus revenue. It is net value versus net value after taxes, benefits, business expenses,
        and risk are considered. A calculator helps frame the comparison, but classification and tax treatment should be reviewed with qualified professionals.
      </p>
      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-lg font-black text-slate-950">Need a side-by-side estimate?</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Use the 1099 vs W2 calculator to compare estimated net outcomes from both paths.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-black">
          <a href="/1099-vs-w2-calculator" className="rounded-md bg-slate-950 px-4 py-2 text-white no-underline">Open 1099 vs W2 calculator</a>
        </div>
      </div>
    </main>
  );
}

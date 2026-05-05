import type { Metadata } from "next";

const guides = [
  {
    title: "How Much Should Freelancers Set Aside for Taxes?",
    description:
      "A practical planning guide for setting aside money for self-employment tax, federal tax, state tax, and quarterly payments.",
    href: "/blog/how-much-should-freelancers-set-aside-for-taxes",
  },
  {
    title: "Freelance Hourly Rate Guide",
    description:
      "A simple framework for turning take-home goals, business expenses, and billable hours into a target freelance rate.",
    href: "/blog/freelance-hourly-rate-guide",
  },
  {
    title: "Quarterly Tax Guide for 1099 Workers",
    description:
      "A plain-English guide to quarterly estimated payments, safe harbor concepts, and cash-flow planning for contractors.",
    href: "/blog/quarterly-tax-guide-for-1099-workers",
  },
];

export const metadata: Metadata = {
  title: "1099desk Guides | Freelancer Tax, Pricing, and 1099 Planning Articles",
  description:
    "Educational guides for US freelancers and 1099 workers on quarterly taxes, freelance rates, invoices, and money planning.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="max-w-3xl">
        <p className="kicker">Freelancer guides</p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
          Tax, pricing, and cash-flow guides for 1099 workers
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Use these guides to understand the planning logic behind the calculators. They are educational only,
          not tax, legal, or financial advice.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <a key={guide.href} href={guide.href} className="premium-card rounded-xl p-5 text-slate-950 no-underline transition hover:-translate-y-0.5">
            <p className="text-xl font-black">{guide.title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-teal-800">
              Read guide →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; description: string; body: string[] }> = {
  "freelancer-tax-planning": {
    title: "Freelancer tax planning basics",
    description:
      "A simple overview of freelance tax planning, recordkeeping, and estimated payment habits for 1099 workers.",
    body: [
      "Freelancer tax planning usually starts with realistic numbers, clean records, and cash set aside before the IRS deadline arrives. If income is irregular, the biggest mistake is treating every deposit as spendable money. A planning system works better when it separates operating cash, owner pay, and a tax reserve from the start.",
      "The exact amount you owe may depend on filing status, other household income, deductions, retirement contributions, credits, and state rules. That is why a calculator should be used as a planning prompt, not as filing instructions. Good bookkeeping and professional review matter more than a single estimate on a screen.",
      "A practical habit is to review income monthly, update your reserve estimate, and compare that estimate with upcoming quarterly payment dates. Even a rough check can reduce surprise tax bills and help you price work more confidently.",
    ],
  },
  "how-much-should-freelancers-set-aside-for-taxes": {
    title: "How Much Should Freelancers Set Aside for Taxes?",
    description:
      "A practical framework for setting aside money for self-employment tax, federal tax, state tax, and quarterly payments.",
    body: [
      "Most freelancers are not really asking for an exact tax number. They are asking how to avoid getting blindsided. A workable answer is to create a standing tax reserve based on your current income, your expected expenses, and the state you live in, then revisit that reserve as income changes.",
      "For many freelancers, the planning stack includes self-employment tax, federal income tax, and state tax. Because rates vary and your full return includes facts a calculator cannot see, the goal is not perfection. The goal is to keep enough cash off-limits so quarterly deadlines do not create panic.",
      "If your income is climbing quickly, review the reserve monthly instead of quarterly. When a quarter is weak, do not assume the annual tax bill disappeared. It may simply arrive later. A calculator can help you pressure-test the reserve, but a CPA should review the final payment strategy.",
    ],
  },
  "freelance-hourly-rate-guide": {
    title: "Freelance Hourly Rate Guide",
    description:
      "How to turn income goals, business expenses, taxes, and billable hours into a more realistic freelance rate.",
    body: [
      "A freelance rate that sounds good in a conversation can still fail in real life if it ignores admin time, marketing time, revisions, software, taxes, and unpaid gaps between projects. That is why rate planning should begin with take-home goals and business costs, not with what a client says they want to pay.",
      "The simplest model works backward. Start with desired take-home income, add annual business expenses, add a tax reserve, and divide by realistic billable hours rather than ideal billable hours. This usually produces a higher number than freelancers expect, but it is far closer to what the business actually needs.",
      "The value of a rate calculator is not that it picks your final price. It gives you a baseline. From there, you can decide whether to raise prices, reduce scope, change packaging, or move from hourly work into retainers or fixed-fee offers.",
    ],
  },
  "quarterly-tax-guide-for-1099-workers": {
    title: "Quarterly Tax Guide for 1099 Workers",
    description:
      "A plain-English planning guide to quarterly estimated tax payments, safe harbor concepts, and freelancer cash flow.",
    body: [
      "Quarterly tax payments are easy to ignore when client work is busy, but that delay usually turns into cash-flow stress later. If you earn 1099 income and do not have enough withholding elsewhere, the IRS may expect estimated payments during the year rather than one large payment at filing time.",
      "A planning calculator can help estimate the annual total and divide it into quarterly amounts, but actual payment strategy may depend on prior-year tax, safe harbor treatment, uneven income, and state-specific rules. That is why the best workflow is to use the estimate as a draft and then review edge cases with a CPA.",
      "The operational habit that matters most is separating the money early. When every payment lands in one account, it becomes too easy to mistake tax money for spendable revenue. A simple reserve rule and a calendar reminder can solve a large part of the problem before penalties ever enter the picture.",
    ],
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug];
  if (!post) {
    return {
      title: "Guide not found | 1099desk",
    };
  }

  return {
    title: `${post.title} | 1099desk`,
    description: post.description,
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <p className="kicker">Educational guide</p>
      <h1 className="mt-4 text-3xl font-black text-gray-950 md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">{post.description}</p>
      <p className="mt-4 font-semibold text-amber-800">
        Educational content only. Not tax, legal, accounting, or financial advice. Consult a qualified CPA.
      </p>
      {post.body.map((paragraph) => (
        <p key={paragraph} className="mt-5 text-base leading-8 text-slate-800">{paragraph}</p>
      ))}
      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-lg font-black text-slate-950">Need an estimate?</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Use the calculators to pressure-test tax reserves, hourly rates, quarterly payments, and 1099 vs W2 tradeoffs.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-black">
          <a href="/self-employment-tax-calculator" className="rounded-md bg-slate-950 px-4 py-2 text-white no-underline">Open tax calculator</a>
          <a href="/freelance-hourly-rate-calculator" className="rounded-md border border-slate-300 px-4 py-2 text-slate-950 no-underline">Open rate calculator</a>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About 1099desk | Freelancer Tax and Pricing Tools",
  description:
    "Learn what 1099desk does, who it helps, and how its freelancer tax, pricing, and invoice tools are maintained.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <h1 className="text-3xl font-bold text-gray-950">About 1099desk</h1>
      <p className="mt-4">1099desk builds privacy-aware financial planning tools for US freelancers. Every calculator is designed to display estimate disclaimers, source citations, visible privacy links, and accessible labels from the first screen.</p>
      <p>
        The site focuses on practical freelancer decisions: how much to set aside for taxes, what rate may support a target income,
        how to compare 1099 and W2 work, and how to generate basic invoices without exposing invoice content to a server.
      </p>
      <h2 className="mt-8 text-xl font-bold">What 1099desk does</h2>
      <p>
        1099desk publishes calculators and educational guides to help freelancers pressure-test money decisions before they become filing,
        pricing, or cash-flow problems. The aim is clarity, not certainty.
      </p>
      <h2 className="mt-8 text-xl font-bold">What 1099desk does not do</h2>
      <p>
        We are not a CPA firm, law firm, payroll provider, or financial advisor. The tools are for informational planning only.
        Consult qualified professionals before making tax, legal, or financial decisions.
      </p>
      <h2 className="mt-8 text-xl font-bold">How content is maintained</h2>
      <p>
        Calculator and guide content is reviewed against current IRS-facing planning assumptions, product behavior, and visible legal disclosures.
        When assumptions change, pages should be updated rather than left ambiguous.
      </p>
      <h2 className="mt-8 text-xl font-bold">Contact</h2>
      <p>
        For support, partnership, or policy questions, visit the <a href="/contact" className="underline">contact page</a>.
      </p>
    </main>
  );
}

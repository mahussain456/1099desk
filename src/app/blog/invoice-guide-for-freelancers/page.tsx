import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Guide for Freelancers | 1099desk",
  description:
    "A practical guide to freelancer invoices, payment terms, client-ready PDFs, and what a basic invoice should include.",
  alternates: { canonical: "/blog/invoice-guide-for-freelancers" },
};

export default function InvoiceGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <p className="kicker">Educational guide</p>
      <h1 className="mt-4 text-3xl font-black text-gray-950 md:text-5xl">Invoice Guide for Freelancers</h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">
        A practical guide to what a basic freelancer invoice should include, how payment terms affect cash flow,
        and why client-ready PDFs still matter.
      </p>
      <p className="mt-4 font-semibold text-amber-800">
        Educational content only. Not legal, tax, or accounting advice.
      </p>
      <p className="mt-5 text-base leading-8 text-slate-800">
        A freelancer invoice does more than request payment. It creates clarity around the work delivered, the amount due,
        the due date, and the payment method. When invoices are vague, clients delay payment, ask unnecessary questions,
        or dispute details that should have been obvious from the start.
      </p>
      <p className="mt-5 text-base leading-8 text-slate-800">
        A basic invoice should normally include the seller name, client name, invoice number, issue date, due date,
        line items, subtotal, taxes if applicable, and clear payment instructions. If your work depends on late fees,
        jurisdiction-specific contract terms, or collections language, those issues should be reviewed by a qualified attorney,
        not improvised inside a template.
      </p>
      <p className="mt-5 text-base leading-8 text-slate-800">
        Operationally, a PDF invoice is still useful because it is portable, easy to archive, and easy for a client finance team to forward.
        What matters most is consistency. Use a numbering system, keep a record of what was billed, and separate invoicing from tax estimation.
      </p>
      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-lg font-black text-slate-950">Need a simple invoice now?</p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Use the client-side invoice generator to create a basic freelancer invoice PDF in your browser.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-black">
          <a href="/invoice-generator" className="rounded-md bg-slate-950 px-4 py-2 text-white no-underline">Open invoice generator</a>
        </div>
      </div>
    </main>
  );
}

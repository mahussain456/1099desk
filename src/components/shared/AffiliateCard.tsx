import { ExternalLink } from "lucide-react";
import { AffiliateDisclosure } from "@/components/legal/AffiliateDisclosure";

export function AffiliateCard() {
  return (
    <section className="mt-10" aria-labelledby="affiliate-heading">
      <AffiliateDisclosure />
      <div className="premium-card mt-3 rounded-xl p-5">
        <h2 id="affiliate-heading" className="text-xl font-black text-stone-950">
          Freelancer bookkeeping options
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-700">
          These providers may help organize invoices, expenses, and tax records. Compare features,
          pricing, and professional guidance before choosing a product.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            ["FreshBooks", "https://freshbooks.com"],
            ["QuickBooks", "https://quickbooks.intuit.com"],
            ["Wave", "https://www.waveapps.com"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={`${href}?ref=1099desk`}
              rel="sponsored nofollow"
              target="_blank"
              aria-label={`Compare ${label} for freelancer bookkeeping`}
              className="inline-flex items-center gap-2 rounded-md border border-teal-700 bg-white/70 px-4 py-2 text-sm font-black text-teal-800 no-underline"
            >
              {label}
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

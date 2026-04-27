import { AffiliateDisclosure } from "@/components/legal/AffiliateDisclosure";
import { AdUnit } from "@/components/shared/AdUnit";
import { AffiliateCard } from "@/components/shared/AffiliateCard";
import { EmailCapture } from "@/components/shared/EmailCapture";
import { FAQ, FAQSection } from "@/components/shared/FAQSection";
import { JsonLd } from "@/components/shared/Schema";
import { RelatedTools } from "@/components/shared/RelatedTools";

type ToolPageLayoutProps = {
  title: string;
  path: string;
  intro: string;
  children: React.ReactNode;
  sourceLabel: string;
  sourceUrl: string;
  howToUse: string[];
  howItWorksTitle: string;
  howItWorks: string[];
  faqs: FAQ[];
  hasAffiliateLinks?: boolean;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://1099desk.com";

export function ToolPageLayout({
  title,
  path,
  intro,
  children,
  sourceLabel,
  sourceUrl,
  howToUse,
  howItWorksTitle,
  howItWorks,
  faqs,
  hasAffiliateLinks = true,
}: ToolPageLayoutProps) {
  const fullUrl = `${siteUrl}${path}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: title,
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
          url: fullUrl,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: title, item: fullUrl },
          ],
        }}
      />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        {hasAffiliateLinks ? <AffiliateDisclosure /> : null}
        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="kicker">Estimator workspace</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal text-stone-950 md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">{intro}</p>
          </div>
          <aside className="premium-card rounded-lg p-4" aria-label="Compliance summary">
            <p className="text-xs font-black uppercase tracking-normal text-teal-800">Built-in guardrails</p>
            <dl className="mt-3 grid gap-3 text-sm">
              <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-2">
                <dt className="font-semibold text-stone-600">Last updated</dt>
                <dd className="font-black text-stone-950">Jan 2026</dd>
              </div>
              <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-2">
                <dt className="font-semibold text-stone-600">IRS source</dt>
                <dd className="font-black text-teal-800">Linked</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="font-semibold text-stone-600">Advice status</dt>
                <dd className="font-black text-amber-800">Estimate only</dd>
              </div>
            </dl>
          </aside>
        </section>
        <AdUnit position="leaderboard" />
        {children}
        <p className="mt-5 inline-flex flex-wrap items-center gap-1 rounded-md border border-stone-200 bg-white/70 px-3 py-2 text-sm font-bold text-stone-700">
          Last Updated: January 2026 | Source:{" "}
          <a href={sourceUrl} target="_blank" rel="noreferrer" className="underline">
            {sourceLabel}
          </a>
        </p>
        <section className="prose-readable mt-12 premium-card rounded-lg p-6" aria-labelledby="how-use">
          <h2 id="how-use" className="text-2xl font-black text-stone-950">
            How to Use This Calculator
          </h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {howToUse.map((item) => (
              <li key={item} className="list-none rounded-md border border-stone-200 bg-white/70 p-4 font-medium">
                {item}
              </li>
            ))}
          </ol>
        </section>
        <section className="prose-readable mt-12" aria-labelledby="how-works">
          <h2 id="how-works" className="text-3xl font-black text-stone-950">
            {howItWorksTitle}
          </h2>
          {howItWorks.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 max-w-4xl text-base">
              {paragraph}
            </p>
          ))}
        </section>
        <FAQSection faqs={faqs} />
        {hasAffiliateLinks ? <AffiliateCard /> : null}
        <RelatedTools currentPath={path} />
        <EmailCapture />
      </main>
    </>
  );
}

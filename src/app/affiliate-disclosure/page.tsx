const partners = ["FreshBooks", "QuickBooks", "Wave", "Keeper Tax", "TurboTax"];

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <h1 className="text-3xl font-bold text-gray-950">Affiliate Disclosure</h1>
      <p className="mt-4">Disclosure: Some links are affiliate links. We may earn a commission at no cost to you. Our recommendations are independent of affiliate relationships.</p>
      <p>This standalone disclosure is provided for FTC 16 CFR Part 255 compliance. We earn a commission per sale at no cost to you when you purchase through certain tracked links.</p>
      <h2 className="mt-8 text-xl font-bold">Affiliate Partners</h2>
      <ul className="mt-4 list-disc pl-5">
        {partners.map((partner) => (
          <li key={partner}>
            {partner}: We may receive a commission when a user purchases or signs up through an affiliate link to this partner.
          </li>
        ))}
      </ul>
      <p className="mt-6">Affiliate compensation does not guarantee placement, ranking, or endorsement. We avoid unqualified claims such as “best” or “#1” unless a clearly cited and current basis is provided.</p>
    </main>
  );
}

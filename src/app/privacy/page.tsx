export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <h1 className="text-3xl font-bold text-gray-950">Privacy Policy</h1>
      <p className="mt-2 font-semibold text-gray-700">Effective Date: January 2026</p>
      <h2 className="mt-8 text-xl font-bold">1. Data We Collect</h2>
      <p>1099desk collects limited operational data. If you consent to analytics cookies, GA4 may collect behavioral usage data with anonymized IP configuration. If you subscribe to email updates, ConvertKit receives your email address and manages double opt-in confirmation.</p>
      <h2 className="mt-8 text-xl font-bold">2. Advertising and Cookies</h2>
      <p>After cookie consent, Google AdSense may use advertising cookies. CookieYes records consent choices. Non-essential analytics and advertising scripts do not intentionally load before consent.</p>
      <h2 className="mt-8 text-xl font-bold">3. What We Do Not Store</h2>
      <p>We do not store calculator inputs on our servers. We do not store invoice content. Invoice PDFs are generated in your browser. No invoice line items, client names, addresses, notes, or totals are transmitted to 1099desk servers.</p>
      <h2 className="mt-8 text-xl font-bold">4. Invoice Privacy</h2>
      <p>Section 4.2: The invoice generator operates client-side. Invoice numbers may be stored in your browser localStorage. PDF generation uses browser memory and object URLs. Clearing browser storage removes locally stored invoice numbers.</p>
      <h2 className="mt-8 text-xl font-bold">5. Your Rights</h2>
      <p>You may request access, deletion, correction, or portability of personal data we control. California residents may request CCPA disclosures and opt out of sale or sharing where applicable. GDPR residents may object to or restrict certain processing.</p>
      <h2 className="mt-8 text-xl font-bold">6. Contact</h2>
      <p>For privacy requests, contact privacy@1099desk.com. We may need to verify your request before acting on it.</p>
    </main>
  );
}

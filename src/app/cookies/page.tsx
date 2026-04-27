export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <h1 className="text-3xl font-bold text-gray-950">Cookie Policy</h1>
      <p className="mt-2 font-semibold text-gray-700">Effective Date: January 2026</p>
      <h2 className="mt-8 text-xl font-bold">Cookie Categories</h2>
      <p>Essential cookies support site operation and consent management. Analytics cookies help us understand aggregate usage only after consent. Advertising cookies may support AdSense only after consent.</p>
      <h2 className="mt-8 text-xl font-bold">Cookies Used</h2>
      <ul className="mt-4 list-disc pl-5">
        <li>CookieYes: stores your consent preferences.</li>
        <li>GA4 _ga and _gid: analytics identifiers loaded only after consent.</li>
        <li>AdSense cookies: advertising and fraud-prevention cookies loaded only after consent.</li>
      </ul>
      <h2 className="mt-8 text-xl font-bold">Opt Out</h2>
      <p>You can reject non-essential cookies from the cookie banner, clear browser cookies, or manage ad personalization at <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google Ads Settings</a>.</p>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact 1099desk | Support, Privacy, and Partnerships",
  description:
    "Contact 1099desk for calculator feedback, privacy requests, partnership questions, or site support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose-readable">
      <h1 className="text-3xl font-bold text-gray-950">Contact 1099desk</h1>
      <p className="mt-4">
        For general questions, partnership inquiries, calculator feedback, or policy issues, email us at
        {" "}<a href="mailto:m.ahmedhussain9@gmail.com" className="underline">m.ahmedhussain9@gmail.com</a>.
      </p>
      <p>
        For privacy-related requests, you can also contact {" "}
        <a href="mailto:privacy@1099desk.com" className="underline">privacy@1099desk.com</a>.
      </p>
      <h2 className="mt-8 text-xl font-bold">What to include</h2>
      <p>
        If you are reporting a calculator issue, include the page URL, the inputs you used, and what result looked wrong.
        That makes it much easier to review and fix.
      </p>
      <h2 className="mt-8 text-xl font-bold">Response scope</h2>
      <p>
        1099desk can answer site and product questions, but cannot provide individualized tax, legal, or accounting advice.
      </p>
    </main>
  );
}

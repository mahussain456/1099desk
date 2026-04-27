"use client";

import { ClipboardCheck, Mail } from "lucide-react";
import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const formId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID ?? "";

  return (
    <section className="premium-card mt-10 rounded-xl p-5" aria-labelledby="email-heading">
      <div className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-teal-900 text-white">
          <ClipboardCheck aria-hidden="true" className="h-5 w-5" />
        </span>
        <h2 id="email-heading" className="text-xl font-black text-stone-950">
          Get the 2026 Freelancer Tax & Pricing Checklist
        </h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-stone-700">
        Get the quarterly due date calendar, tax reserve checklist, invoice prep list, and pricing
        prompts. ConvertKit double opt-in is enabled. We collect your email only to send requested updates.
      </p>
      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        action={formId ? `https://app.convertkit.com/forms/${formId}/subscriptions` : "/privacy"}
        method="post"
      >
        <div className="grow">
          <label htmlFor="email" className="block text-sm font-black text-stone-900">
            Email address
          </label>
          <input
            id="email"
            name="email_address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            aria-required="true"
            aria-describedby="email-privacy"
            className="premium-input mt-1 w-full rounded-md px-3 py-3 text-stone-950"
          />
        </div>
        <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-5 py-3 font-black text-white">
          <Mail aria-hidden="true" className="h-4 w-4" />
          Send checklist
        </button>
      </form>
      <p id="email-privacy" className="mt-3 text-sm text-stone-700">
        By subscribing, you agree to the{" "}
        <a href="/privacy" className="font-semibold underline">
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
}

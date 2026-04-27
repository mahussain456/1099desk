"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("cookieyes-consent") === null);
  }, []);

  function setConsent(value: "yes" | "no") {
    localStorage.setItem("cookieyes-consent", value);
    window.dispatchEvent(new Event("cookieyes-consent-changed"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-300 bg-[#fffdf8] p-4 shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="cookie-banner-title" className="text-base font-black text-stone-950">
            Cookie choices
          </h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-stone-700">
            We use essential cookies to operate the site. Analytics, AdSense, and personalization
            scripts load only after consent. You can reject non-essential cookies and still use every
            calculator.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setConsent("no")}
            className="rounded-md border border-stone-700 px-4 py-2 text-sm font-black text-stone-900"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => setConsent("yes")}
            className="rounded-md bg-stone-950 px-4 py-2 text-sm font-black text-white"
          >
            Accept Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

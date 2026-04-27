"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function AnalyticsConsent() {
  const [consent, setConsent] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    const syncConsent = () => setConsent(localStorage.getItem("cookieyes-consent") === "yes");
    syncConsent();
    window.addEventListener("cookieyes-consent-changed", syncConsent);
    return () => window.removeEventListener("cookieyes-consent-changed", syncConsent);
  }, []);

  if (!consent) return null;

  return (
    <>
      {gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-consented" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      ) : null}
      {adsenseId ? (
        <Script
          id="adsense-consented"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}

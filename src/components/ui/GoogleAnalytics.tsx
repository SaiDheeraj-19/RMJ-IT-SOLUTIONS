"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function GoogleAnalytics() {
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            const savedConsent = localStorage.getItem("rmjit_cookie_consent");
            if (savedConsent) {
                const { preferences } = JSON.parse(savedConsent);
                setHasConsent(preferences.performance || preferences.analytics);
            }
        };

        checkConsent();

        window.addEventListener("rmjit_consent_updated", checkConsent);
        return () => window.removeEventListener("rmjit_consent_updated", checkConsent);
    }, []);

    if (!hasConsent) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}

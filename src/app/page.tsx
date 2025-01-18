// app/page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const RootRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Detect the user's preferred language
    const { language } = navigator;
    const langCode = language.split("-")[0].toLowerCase();

    // Define supported locales
    const supportedLocales = ["en", "de"];
    const defaultLocale = "de";

    // Determine the target locale
    const targetLocale = supportedLocales.includes(langCode) ? langCode : defaultLocale;

    // Redirect to the localized path
    router.replace(`/${targetLocale}`);
  }, [router]);

  return (
    <>
      <Head>
        <title>CleverCoffee</title>
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en" />
        <link rel="alternate" hrefLang="de" href="https://yourdomain.com/de" />
        <link rel="alternate" hrefLang="x-default" href="https://yourdomain.com/en" />
      </Head>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Redirecting to your preferred language...</p>
      </div>
    </>
  );
};

export default RootRedirect;

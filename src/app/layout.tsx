import "./styles/globals.css";
import "./styles/index.css";

import { Constants } from "@src/constants";
import type { Metadata, Viewport } from "next";
import React, { PropsWithChildren } from "react";
import StateProvider from "@app/src/context/StateProvider";
import Head from "next/head";
import { Inter } from "next/font/google";
import { getLocale } from "@app/src/lib/dictionaries/Dictionaries";
import ServerSideTranslations from "@app/src/lib/dictionaries/ServerSideTranslations";
import Translations from "@app/src/lib/dictionaries/Translations";

export const metadata: Metadata = {
  title: Constants.META_EN.TITLE,
  description: Constants.META_EN.DESCRIPTION,
  keywords: Constants.META_EN.KEYWORDS,
  authors: [{ name: Constants.SITE.NAME, url: Constants.SITE.DOMAIN }],
  metadataBase: new URL(Constants.SITE.DOMAIN),
  openGraph: {
    title: Constants.META_EN.TITLE,
    description: Constants.META_EN.DESCRIPTION,
    url: Constants.SITE.DOMAIN,
    siteName: Constants.OPEN_GRAPH.SITE_NAME,
    images: [
      {
        url: Constants.SITE.OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Henry Albiri S | Developer Portfolio",
      },
    ],
    locale: Constants.OPEN_GRAPH.LOCALE_EN,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: Constants.META_EN.TITLE,
    description: Constants.META_EN.DESCRIPTION,
    images: [Constants.SITE.OG_IMAGE],
  },

  alternates: {
    canonical: Constants.SITE.DOMAIN,
    languages: {
      en: `${Constants.SITE.DOMAIN}`,
      id: `${Constants.SITE.DOMAIN}/id`,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: Constants.SITE.THEME_COLOR,
  minimumScale: 1,
  maximumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const preconnectUrls = [
  "https://fonts.gstatic.com",
  "https://fonts.googleapis.com",
];

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const locale = await getLocale();
  const dictionaryObj = await ServerSideTranslations(["common"]);

  return (
    <html translate="no" lang="id">
      <Head>
        {preconnectUrls.map((url) => (
          <React.Fragment key={url}>
            <link rel="dns-prefetch" href={url} />
            <link rel="preconnect" href={url} crossOrigin="" />
          </React.Fragment>
        ))}

        <meta name="author" content={Constants.SITE.NAME} />
        <meta name="application-name" content={Constants.SITE.NAME} />
        <meta name="generator" content="Next.js" />

        {/* MOBILE */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={Constants.SITE.NAME} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta name="theme-color" content={Constants.SITE.THEME_COLOR} />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <body lang="en">
        <StateProvider>
          <Translations _PropsTranslation={dictionaryObj} locale={locale}>
            {children}
          </Translations>
        </StateProvider>
      </body>
    </html>
  );
}

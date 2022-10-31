import React from "react";
import { useRouter } from "next/router";
import { NextSeo, NextSeoProps } from "next-seo";

enum Locales {
  pl = "pl-PL",
  en = "en-US",
}

type MetaProps = {
  noindex: boolean;
  nofollow: boolean;
};

function Meta({ noindex, nofollow }: MetaProps) {
  const { locale } = useRouter();

  const seo: NextSeoProps = {
    canonical: `https://bor-kur.pl/${Locales.pl}`,
    languageAlternates: [
      { hrefLang: Locales.en, href: `https://bor-kur.pl/${Locales.en}` },
    ],
    openGraph: {
      type: "website",
      site_name: "BOR-KUR",
    },
    twitter: {
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "author",
        content: "Karol Binkowski",
      },
    ],
    additionalLinkTags: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    noindex,
    nofollow,
  };

  const seoPl: NextSeoProps = {
    ...seo,
    title: "BOR-KUR | Hodowla drobiu — Wybierz to, co najlepsze!",
    description:
      "Nasze zaangażowanie w chów i hodowlę zapewnia najlepsze warunki rozwoju, a dobrostan i zdrowie stad są dla nas priorytetem.",
    openGraph: {
      locale: Locales.pl,
      url: `https://bor-kur.pl`,
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: "chów, hodowla, kury, kurczaki, drób, drob, mięso, farma, ferma",
      },
    ],
  };

  const seoEn: NextSeoProps = {
    ...seo,
    title: "BOR-KUR | Chicken breeding — Choose the best!",
    description:
      "Our commitment to breeding and rearing ensures the best conditions for growth, and the welfare and health of the herds are our top priority.",
    openGraph: {
      locale: Locales.en,
      url: `https://bor-kur.pl/${Locales.en}`,
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: "farming, breeding, hens, chickens, poultry, poultry, meat, farm",
      },
    ],
  };

  return locale === Locales.pl ? <NextSeo {...seoPl} /> : <NextSeo {...seoEn} />;
}

export default Meta;

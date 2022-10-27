// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ILayoutFields {
  /** Logo alternative text */
  logoAlternativeText: string;

  /** About */
  about: string;

  /** Contact */
  contact: string;

  /** ThemeSwitcher title */
  themeSwitcherTitle: string;

  /** LocaleSwitcher title */
  localeSwitcherTitle: string;
}

export interface ILayout extends Entry<ILayoutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "layout";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageHomeFields {
  /** Layout */
  layout: ILayout;

  /** Hero */
  hero: ISectionHero;

  /** Our Values */
  ourValues: ISectionOurValues;

  /** Contact */
  contact: ISectionContact;
}

export interface IPageHome extends Entry<IPageHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageHome";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionContactFields {
  /** Title */
  title: string;

  /** Email */
  email: string;

  /** Email placeholder */
  emailPlaceholder: string;

  /** Message */
  message: string;

  /** Message placeholder */
  messagePlaceholder: string;

  /** Submit */
  submit: string;

  /** Empty field message */
  emptyFieldMessage: string;

  /** Invalid email message */
  invalidEmailMessage: string;

  /** Form action link */
  formActionLink: string;

  /** Email subject */
  emailSubject: string;

  /** Thank you page URL */
  thankYouPageUrl: string;
}

export interface ISectionContact extends Entry<ISectionContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionContact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionHeroFields {
  /** Title */
  title: string;

  /** Paragraph */
  paragraph: string;

  /** Cta (contact) */
  ctaContact: string;

  /** Image alternative text */
  imageAlternativeText: string;
}

export interface ISectionHero extends Entry<ISectionHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionHero";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionOurValuesFields {
  /** title */
  title: string;

  /** People - Title */
  peopleTitle: string;

  /** People - Paragraph */
  peopleParagraph: string;

  /** People - Image alternative text */
  peopleImageAlternativeText: string;

  /** Growth - Title */
  growthTitle: string;

  /** Growth - Paragraph */
  growthParagraph: string;

  /** Growth - Image alternative text */
  growthImageAlternativeText: string;

  /** Quality - Title */
  qualityTitle: string;

  /** Quality - Paragraph */
  qualityParagraph: string;

  /** Quality - Image alternative text */
  qualityImageAlternativeText: string;
}

export interface ISectionOurValues extends Entry<ISectionOurValuesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionOurValues";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "layout"
  | "pageHome"
  | "sectionContact"
  | "sectionHero"
  | "sectionOurValues";

export type LOCALE_CODE = "en-US" | "pl-PL";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";

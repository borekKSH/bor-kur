import React from "react";

import { createClient } from "contentful";
import { IPageThankYou } from "../types/generated/contentful";
import Layout from "../components/Layout";
import RedirectSection from "../components/RedirectSection";

import imageThankYou from "../public/illustrations/appreciation.svg";

type ThankYouPageProps = {
  content: IPageThankYou;
};

function ThankYouPage({ content }: ThankYouPageProps) {
  const { layout, thankYou } = content.fields;

  return (
    <Layout content={layout} noindex nofollow>
      <RedirectSection content={thankYou} illustration={imageThankYou} />
    </Layout>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: "pageThankYou", locale });
  const content = entries.items[0] as IPageThankYou;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };

export default ThankYouPage;

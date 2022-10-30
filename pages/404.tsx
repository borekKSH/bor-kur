import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { IPageNotFound } from "../types/generated/contentful";
import Layout from "../components/Layout";
import RedirectSection from "../components/RedirectSection";

import imageNotFound from "../public/illustrations/page-not-found.svg";

type NotFoundProps = {
  content: IPageNotFound;
};

function NotFound({ content }: NotFoundProps) {
  const { layout, notFound } = content.fields;

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <Layout content={layout} noindex nofollow>
      <RedirectSection content={notFound} illustration={imageNotFound} />
    </Layout>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: "pageNotFound", locale });
  const content = entries.items[0] as IPageNotFound;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };

export default NotFound;

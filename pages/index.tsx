import React from "react";
import { createClient } from "contentful";
import { IPageHome } from "../types/generated/contentful";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

type HomePageProps = {
  content: IPageHome;
};

function HomePage({ content }: HomePageProps) {
  const { hero, navbar } = content.fields;

  return (
    <Layout navbarContent={navbar}>
      <Hero content={hero} />
    </Layout>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: "pageHome", locale });
  const content = entries.items[0] as IPageHome;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };

export default HomePage;

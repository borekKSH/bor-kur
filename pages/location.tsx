import React from "react";
import dynamic from "next/dynamic";
import { createClient } from "contentful";
import Layout from "../components/Layout";
import AddressFooter from "../components/AddressFooter";
import { IPageLocation } from "../types/generated/contentful";

type LocationPageProps = {
  content: IPageLocation;
};

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

function LocationPage({ content }: LocationPageProps) {
  const { layout, map, ourLocation } = content.fields;

  return (
    <Layout content={layout}>
      <MapWithNoSSR content={map} />
      <AddressFooter content={ourLocation} />
    </Layout>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: "pageLocation", locale });
  const content = entries.items[0] as IPageLocation;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };

export default LocationPage;

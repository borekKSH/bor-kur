import { createClient } from "contentful";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: "secretLinks" });
  const content = entries.items[0];
  const links = content.fields;

  console.log(JSON.stringify(req))

  links.map((e) => { 
    console.log(e)
  })
  
  res.status(200).json({ name: "John Doe" });
}

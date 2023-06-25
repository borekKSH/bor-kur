# BOR-KUR.pl

Headless CMS-based website for the BOR-KUR chicken farm.

## Includes pages:
- **Global Layout for all the pages**
  - Navbar
  - Contact form
  - Address footer
  - Footer

- **Home**
  - Hero
  - About
  - Our values
- **Location**
  - Interactive map (Google Maps)
- **Thank you**
- **Not found / 404 with auto-redirect**

In addition, it includes a simple link shortener with password-protected links.

## Stack

- Framework: [Next.js](https://nextjs.org)
- Styling: [Tailwind CSS](https://tailwindcss.com)
- Headless CMS: [Contentful](https://www.contentful.com)
- Animations: [Framer Motion](https://www.framer.com/motion)
- Forms: [Formik](https://jaredpalmer.com/formik)
- Form Validations: [Yup](https://github.com/jquense/yup)
- SEO: [Next SEO](https://github.com/garmeeh/next-seo)
- Sitemap: [Next Sitemap](https://www.npmjs.com/package/next-sitemap)
- Icons: [Tabler Icons](https://tabler-icons.io)
- Images: [Unsplash](https://unsplash.com)
- Illustrations: [unDraw](https://undraw.co)
- Linting: [ESLint](https://eslint.org)
- Code Formatting: [Prettier](https://prettier.io)

## Development

First, you need to set enviromental variables in `.env` file to connect the Contentful CMS to the project.
You can recreate Contentful data model based on generated TypeScript file in `types/generated/contentful.d.ts`.
- `SITE_URL` should contain the url of your website.
- `JWT_KEY` should contain some random string for creating JWT tokens.
- `SECRET_LINK_PASSWORD` is a global password which will work on every password protected link as a backup and **is not required**.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel 

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

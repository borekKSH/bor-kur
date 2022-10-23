/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pl-PL', 'en-US'],
    defaultLocale: 'pl-PL',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

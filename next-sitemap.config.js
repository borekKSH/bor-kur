/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://karolbinkowski.me',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/l/*/' },
      { userAgent: '*', disallow: '/en-US/l/*/' },
      { userAgent: '*', disallow: '/404' },
      { userAgent: '*', disallow: '/en-US/404' },
      { userAgent: '*', disallow: '/thank-you' },
      { userAgent: '*', disallow: '/en-US/thank-you' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/l/*/', '/en-US/l/*/', '/404', '/en-US/404', '/thank-you', '/en-US/thank-you'],
};

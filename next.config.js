/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  // This ensures that the i18n configuration is respected in production
  trailingSlash: false,
}

module.exports = nextConfig; 
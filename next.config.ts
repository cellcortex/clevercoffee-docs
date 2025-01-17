import nextra from "nextra";

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de"
  },
  redirects: async () => [
    {
      source: "/docs",
      destination: "/docs/getting-started",
      statusCode: 302
    }
  ]
});

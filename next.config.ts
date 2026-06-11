import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  reactCompiler: false, // Disable React Compiler for stability
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.tdgtrading.ro',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.tdgtrading.ro/wp-json/wp/v2',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://tdgtrading.ro',
  },
};

export default withNextIntl(nextConfig);

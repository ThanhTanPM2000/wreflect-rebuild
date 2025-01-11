import bundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withNextIntl(
  withBundleAnalyzer({
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wreflect.s3.ap-southeast-2.amazonaws.com',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
        },
      ],
    },
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
  })
);

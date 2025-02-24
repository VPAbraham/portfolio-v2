import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    // Find the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    if (!fileLoaderRule) return config; // Ensure the rule exists

    // Modify the existing rule to only apply to SVG imports ending in ?url
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert other *.svg imports into React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        }, // Exclude *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Exclude SVGs from the original file loader rule
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;

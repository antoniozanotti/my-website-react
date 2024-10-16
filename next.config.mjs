import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.gql$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    });
    return config;
  }
};
 
export default withNextIntl(nextConfig);
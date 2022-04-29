/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withLinaria = require('next-linaria');
const withPreact = require('next-plugin-preact');


const {
  defaultLocale,
  localeEnName,
  localeFrName,
  localePtBrName
} = require('./src/locales/configs')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  compiler: {
    removeConsole: true,
  },
  i18n: {
    locales: [localeEnName, localeFrName, localePtBrName],
    defaultLocale: defaultLocale,
    localeDetection: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
    images: {
      layoutRaw: true,
    },
  },
  webpack(config, { dev }) {
    //* Making webpack use minified version of animejs
    if(!dev) config.resolve.alias['animejs'] = path.join(__dirname, 'node_modules/animejs/lib/anime.min.js');

    config.module.rules.push({
      test: /\.svg$/,
      loader: '@svgr/webpack',
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: { plugins: [{ removeViewBox: false }] },
        titleProp: true,
      },
    });

    return config;
  },
}

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withPreact],
  [withLinaria],
], nextConfig)

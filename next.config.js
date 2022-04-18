/** @type {import('next').NextConfig} */
//const withPlugins = require('next-compose-plugins');

const withLinaria = require('next-linaria');

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
    images: {
      layoutRaw: true,
    },
  },
  webpack(config) {
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

module.exports = withLinaria(nextConfig)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;

const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer();

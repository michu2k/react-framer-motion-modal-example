/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: ".",
    output: "export",
    swcMinify: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;

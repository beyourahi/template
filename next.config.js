/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [{ hostname: "lh3.googleusercontent.com" }]
    }
});

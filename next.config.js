/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }
};

module.exports = nextConfig;

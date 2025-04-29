/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    i18n: {
        locales: ['fr'],
        defaultLocale: 'fr',
    },
    output: 'standalone',
    reactStrictMode: true,
    optimizeFonts: true,
    swcMinify: true,
}

module.exports = nextConfig

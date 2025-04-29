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
    // i18n config is deprecated in App Router, using middleware instead
    // See: https://nextjs.org/docs/app/building-your-application/routing/internationalization
    output: 'standalone',
    reactStrictMode: true,
    optimizeFonts: true,
    swcMinify: true,
}

module.exports = nextConfig

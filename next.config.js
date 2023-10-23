/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.valorant-api.com',
                pathname: '**'
            }
        ]
    }
}

module.exports = nextConfig

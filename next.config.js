/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digiday.com',
                port: '',
                pathname: '/**',
            },
        
        ]
    }
}

module.exports = nextConfig

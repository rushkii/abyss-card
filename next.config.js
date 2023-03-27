/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/uid',
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enka.network",
        port: "",
        pathname: "/ui/**",
      },
    ],
    domains: ["enka.network"]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
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

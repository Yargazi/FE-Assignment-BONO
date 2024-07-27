/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.bono.so",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

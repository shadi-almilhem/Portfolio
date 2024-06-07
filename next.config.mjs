/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "yguwmcpahurplgyydvrk.supabase.co" },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "yguwmcpahurplgyydvrk.supabase.co" },
    ],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);

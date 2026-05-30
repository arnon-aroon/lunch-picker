import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone/LAN testing (README) without cross-origin blocks on /_next dev assets.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;

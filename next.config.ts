import type { NextConfig } from "next";

const envOrigins =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  // Allow phone/LAN testing without cross-origin blocks on /_next dev assets.
  allowedDevOrigins: [...envOrigins, "192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;

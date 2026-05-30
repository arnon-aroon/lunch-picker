import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Match .env.example so `prisma generate` works before `.env` exists (postinstall / fresh clone).
    url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
  },
});

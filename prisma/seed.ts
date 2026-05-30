import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
});

const prisma = new PrismaClient({ adapter });

const SEED_SPOTS = [
  { name: "Corner Deli", bucket: "NEAR" as const, notes: "Sandwiches & salads" },
  { name: "Ramen House", bucket: "NEAR" as const, notes: "Quick counter lunch" },
  { name: "Food Hall", bucket: "FAR" as const, notes: "Lots of options" },
  { name: "Waterfront Grill", bucket: "FAR" as const, notes: "Sit-down, 15 min drive" },
];

async function main() {
  const count = await prisma.spot.count();
  if (count > 0) {
    return;
  }

  await prisma.spot.createMany({ data: SEED_SPOTS });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

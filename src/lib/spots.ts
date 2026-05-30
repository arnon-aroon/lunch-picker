import type { DistanceBucket } from "@/components/distance-toggle";
import { prisma } from "@/lib/prisma";

export type SpotDTO = {
  id: string;
  name: string;
  notes: string | null;
  bucket: DistanceBucket;
};

function toUiBucket(bucket: "NEAR" | "FAR"): DistanceBucket {
  return bucket === "NEAR" ? "near" : "far";
}

export function toPrismaBucket(bucket: DistanceBucket): "NEAR" | "FAR" {
  return bucket === "near" ? "NEAR" : "FAR";
}

export async function getAllSpots(): Promise<SpotDTO[]> {
  const spots = await prisma.spot.findMany({ orderBy: { name: "asc" } });

  return spots.map((spot) => ({
    id: spot.id,
    name: spot.name,
    notes: spot.notes,
    bucket: toUiBucket(spot.bucket),
  }));
}

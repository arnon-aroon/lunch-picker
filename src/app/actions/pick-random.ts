"use server";

import { revalidatePath } from "next/cache";
import type { DistanceBucket } from "@/components/distance-toggle";
import { prisma } from "@/lib/prisma";
import { toPrismaBucket, type SpotDTO } from "@/lib/spots";

export async function pickRandomSpot(
  bucket: DistanceBucket,
): Promise<Pick<SpotDTO, "id" | "name" | "notes"> | null> {
  const spots = await prisma.spot.findMany({
    where: { bucket: toPrismaBucket(bucket) },
  });

  if (spots.length === 0) {
    return null;
  }

  const spot = spots[Math.floor(Math.random() * spots.length)]!;

  await prisma.pick.create({
    data: { spotId: spot.id },
  });

  revalidatePath("/");

  return {
    id: spot.id,
    name: spot.name,
    notes: spot.notes,
  };
}

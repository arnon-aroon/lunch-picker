"use server";

import { revalidatePath } from "next/cache";
import type { DistanceBucket } from "@/components/distance-toggle";
import { prisma } from "@/lib/prisma";
import { toPrismaBucket } from "@/lib/spots";

export async function addSpot(formData: FormData): Promise<{ ok: true } | { ok: false; error: string }> {
  const name = String(formData.get("name") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const bucket = formData.get("bucket");

  if (!name) {
    return { ok: false, error: "Name is required." };
  }

  if (bucket !== "near" && bucket !== "far") {
    return { ok: false, error: "Choose Near or Far." };
  }

  await prisma.spot.create({
    data: {
      name,
      notes: notes || null,
      bucket: toPrismaBucket(bucket as DistanceBucket),
    },
  });

  revalidatePath("/");
  return { ok: true };
}

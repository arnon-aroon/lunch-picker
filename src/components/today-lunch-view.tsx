"use client";

import { useState, useTransition } from "react";
import { pickRandomSpot } from "@/app/actions/pick-random";
import type { SpotDTO } from "@/lib/spots";
import { AddSpotForm } from "./add-spot-form";
import { DistanceToggle, type DistanceBucket } from "./distance-toggle";
import { LunchSpotCard } from "./lunch-spot-card";
import { MobileShell } from "./mobile-shell";

const EMPTY_COPY: Record<DistanceBucket, { title: string; body: string }> = {
  near: {
    title: "No nearby spots yet",
    body: "Add lunch places within a quick walk to start picking from here.",
  },
  far: {
    title: "No further spots yet",
    body: "Add lunch places worth the trip to fill this list.",
  },
};

type TodayLunchViewProps = {
  spots: SpotDTO[];
};

export function TodayLunchView({ spots }: TodayLunchViewProps) {
  const [distance, setDistance] = useState<DistanceBucket>("near");
  const [picked, setPicked] = useState<Pick<SpotDTO, "id" | "name" | "notes"> | null>(
    null,
  );
  const [isPending, startTransition] = useTransition();

  const filtered = spots.filter((spot) => spot.bucket === distance);
  const empty = EMPTY_COPY[distance];
  const canPick = filtered.length > 0 && !isPending;

  function handleDistanceChange(next: DistanceBucket) {
    setDistance(next);
    setPicked(null);
  }

  function handlePickRandom() {
    startTransition(async () => {
      const result = await pickRandomSpot(distance);
      setPicked(result);
    });
  }

  return (
    <MobileShell
      footer={
        <button
          type="button"
          disabled={!canPick}
          onClick={handlePickRandom}
          className="min-h-11 w-full touch-manipulation rounded-xl bg-accent px-4 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isPending ? "Picking…" : "Pick random"}
        </button>
      }
    >
      <DistanceToggle value={distance} onChange={handleDistanceChange} />

      {spots.length > 0 ? (
        <details className="rounded-xl border border-foreground/10 bg-foreground/[0.02] px-4 py-3">
          <summary className="cursor-pointer touch-manipulation text-sm font-medium text-foreground/80">
            Add another spot
          </summary>
          <div className="mt-3">
            <AddSpotForm defaultBucket={distance} />
          </div>
        </details>
      ) : null}

      {picked ? (
        <section
          aria-live="polite"
          aria-label="Today's pick"
          className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-4 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            Today&apos;s pick
          </p>
          <p className="mt-1 text-xl font-semibold">{picked.name}</p>
          {picked.notes ? (
            <p className="mt-1 text-sm text-foreground/65">{picked.notes}</p>
          ) : null}
        </section>
      ) : null}

      <section aria-label="Lunch options" className="flex flex-1 flex-col gap-2">
        {filtered.length === 0 ? (
          <div className="flex flex-1 flex-col gap-4">
            <div className="rounded-xl border border-dashed border-foreground/15 px-6 py-8 text-center">
              <p className="text-sm font-medium text-foreground/75">{empty.title}</p>
              <p className="mx-auto mt-1 max-w-[16rem] text-sm leading-relaxed text-foreground/50">
                {empty.body}
              </p>
            </div>
            <AddSpotForm defaultBucket={distance} />
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {filtered.map((spot) => (
              <li key={spot.id}>
                <LunchSpotCard
                  name={spot.name}
                  note={spot.notes}
                  selected={picked?.id === spot.id}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </MobileShell>
  );
}

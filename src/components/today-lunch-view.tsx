"use client";

import { useMemo, useState } from "react";
import { DistanceToggle, type DistanceBucket } from "./distance-toggle";
import { LunchSpotCard } from "./lunch-spot-card";
import { MobileShell } from "./mobile-shell";

const PLACEHOLDER_SPOTS: Record<
  DistanceBucket,
  { id: string; name: string; note: string }[]
> = {
  near: [
    { id: "n1", name: "Corner Noodle", note: "~5 min walk" },
    { id: "n2", name: "Salad Box", note: "Ground floor" },
  ],
  far: [
    { id: "f1", name: "Riverside Grill", note: "~12 min walk" },
    { id: "f2", name: "Market Hall", note: "Food court" },
  ],
};

export function TodayLunchView() {
  const [distance, setDistance] = useState<DistanceBucket>("near");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const spots = useMemo(() => PLACEHOLDER_SPOTS[distance], [distance]);

  function handleDistanceChange(next: DistanceBucket) {
    setDistance(next);
    setSelectedId(null);
  }

  const selectedSpot = spots.find((spot) => spot.id === selectedId);

  return (
    <MobileShell
      footer={
        <button
          type="button"
          disabled={!selectedSpot}
          className="w-full rounded-xl bg-accent px-4 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          {selectedSpot ? `Pick ${selectedSpot.name}` : "Choose a spot"}
        </button>
      }
    >
      <DistanceToggle value={distance} onChange={handleDistanceChange} />

      <section aria-label="Lunch options" className="flex flex-col gap-2">
        <p className="text-sm text-foreground/60">
          {distance === "near" ? "Nearby picks" : "Further options"} — data wiring comes
          next.
        </p>
        <ul className="flex flex-col gap-2">
          {spots.map((spot) => (
            <li key={spot.id}>
              <LunchSpotCard
                name={spot.name}
                note={spot.note}
                selected={selectedId === spot.id}
                onSelect={() => setSelectedId(spot.id)}
              />
            </li>
          ))}
        </ul>
      </section>
    </MobileShell>
  );
}

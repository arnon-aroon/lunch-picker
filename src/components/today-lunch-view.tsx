"use client";

import { useState } from "react";
import { DistanceToggle, type DistanceBucket } from "./distance-toggle";
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

export function TodayLunchView() {
  const [distance, setDistance] = useState<DistanceBucket>("near");
  const empty = EMPTY_COPY[distance];

  return (
    <MobileShell>
      <DistanceToggle value={distance} onChange={setDistance} />

      <section
        aria-label="Lunch options"
        className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-foreground/15 px-6 py-12 text-center"
      >
        <p className="text-sm font-medium text-foreground/75">{empty.title}</p>
        <p className="max-w-[16rem] text-sm leading-relaxed text-foreground/50">
          {empty.body}
        </p>
      </section>
    </MobileShell>
  );
}

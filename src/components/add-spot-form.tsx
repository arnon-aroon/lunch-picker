"use client";

import { useRef, useTransition } from "react";
import { addSpot } from "@/app/actions/add-spot";
import type { DistanceBucket } from "./distance-toggle";

type AddSpotFormProps = {
  defaultBucket: DistanceBucket;
};

export function AddSpotForm({ defaultBucket }: AddSpotFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await addSpot(formData);
      if (result.ok) {
        formRef.current?.reset();
      }
    });
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-4"
    >
      <p className="text-sm font-semibold">Add a lunch spot</p>
      <p className="mt-1 text-xs text-foreground/55">
        Near = quick walk. Far = worth the trip.
      </p>

      <label className="mt-3 block text-xs font-medium text-foreground/70" htmlFor="spot-name">
        Name
      </label>
      <input
        id="spot-name"
        name="name"
        type="text"
        required
        autoComplete="off"
        placeholder="e.g. Corner Deli"
        className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2.5 text-sm touch-manipulation"
      />

      <label className="mt-3 block text-xs font-medium text-foreground/70" htmlFor="spot-notes">
        Notes (optional)
      </label>
      <input
        id="spot-notes"
        name="notes"
        type="text"
        autoComplete="off"
        placeholder="Sandwiches, 5 min walk…"
        className="mt-1 w-full rounded-lg border border-foreground/15 bg-background px-3 py-2.5 text-sm touch-manipulation"
      />

      <fieldset className="mt-3">
        <legend className="text-xs font-medium text-foreground/70">Distance</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {(
            [
              { value: "near", label: "Near" },
              { value: "far", label: "Far" },
            ] as const
          ).map((option) => (
            <label
              key={option.value}
              className="flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm font-medium touch-manipulation has-[:checked]:border-accent has-[:checked]:bg-accent/10"
            >
              <input
                type="radio"
                name="bucket"
                value={option.value}
                defaultChecked={defaultBucket === option.value}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 w-full min-h-11 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background touch-manipulation disabled:opacity-50"
      >
        {isPending ? "Adding…" : "Add spot"}
      </button>
    </form>
  );
}

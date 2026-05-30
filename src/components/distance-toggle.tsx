"use client";

export type DistanceBucket = "near" | "far";

type DistanceToggleProps = {
  value: DistanceBucket;
  onChange: (value: DistanceBucket) => void;
};

const OPTIONS: { value: DistanceBucket; label: string; hint: string }[] = [
  { value: "near", label: "Near", hint: "Quick walk" },
  { value: "far", label: "Far", hint: "Worth the trip" },
];

export function DistanceToggle({ value, onChange }: DistanceToggleProps) {
  return (
    <div
      role="group"
      aria-label="Distance filter"
      className="grid grid-cols-2 gap-2 rounded-xl bg-foreground/5 p-1"
    >
      {OPTIONS.map((option) => {
        const selected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={`rounded-lg px-3 py-2.5 text-left transition-colors ${
              selected
                ? "bg-background shadow-sm ring-1 ring-foreground/10"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            <span className="block text-sm font-semibold">{option.label}</span>
            <span className="block text-xs text-foreground/55">{option.hint}</span>
          </button>
        );
      })}
    </div>
  );
}

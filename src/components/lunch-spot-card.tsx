type LunchSpotCardProps = {
  name: string;
  note?: string | null;
  selected?: boolean;
};

export function LunchSpotCard({ name, note, selected }: LunchSpotCardProps) {
  return (
    <div
      className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
        selected
          ? "border-accent bg-accent/10 ring-2 ring-accent/40"
          : "border-foreground/10 bg-background"
      }`}
      aria-current={selected ? "true" : undefined}
    >
      <span className="block text-base font-medium">{name}</span>
      {note ? (
        <span className="mt-0.5 block text-sm text-foreground/60">{note}</span>
      ) : null}
    </div>
  );
}

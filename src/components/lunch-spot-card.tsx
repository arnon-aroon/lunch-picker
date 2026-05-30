type LunchSpotCardProps = {
  name: string;
  note: string;
  selected?: boolean;
  onSelect?: () => void;
};

export function LunchSpotCard({ name, note, selected, onSelect }: LunchSpotCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
        selected
          ? "border-accent bg-accent/10 ring-2 ring-accent/40"
          : "border-foreground/10 bg-background hover:border-foreground/20"
      }`}
    >
      <span className="block text-base font-medium">{name}</span>
      <span className="mt-0.5 block text-sm text-foreground/60">{note}</span>
    </button>
  );
}

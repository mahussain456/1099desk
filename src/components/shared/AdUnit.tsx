type AdUnitProps = {
  position: "leaderboard" | "inline" | "sidebar";
};

export function AdUnit({ position }: AdUnitProps) {
  return (
    <div
      className="my-6 flex min-h-24 items-center justify-center rounded-lg border border-dashed border-stone-300 bg-white/60 text-sm font-semibold text-stone-500"
      aria-label={`${position} advertising placement`}
    >
      Sponsored placement loads only after cookie consent.
    </div>
  );
}

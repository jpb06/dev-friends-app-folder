export const MultiSelectSkeleton = () => (
  <div className="form-control mb-2 w-full rounded-lg border border-slate-900 bg-gradient-to-bl from-sky-950 via-cyan-950 to-slate-800 p-2">
    <div className="label flex flex-wrap justify-normal gap-2">
      <div className="skeleton h-10 w-20 shrink-0 rounded-full" />
      <div className="skeleton h-10 w-36 shrink-0 rounded-full" />
      <div className="skeleton h-10 w-24 shrink-0 rounded-full" />
    </div>
    <div className="flex flex-row gap-2">
      <div className="skeleton h-12 w-28 rounded-xl" />
      <div className="skeleton h-12 w-full rounded-xl" />
    </div>
  </div>
);

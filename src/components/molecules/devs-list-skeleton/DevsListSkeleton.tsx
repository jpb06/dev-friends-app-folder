export const DevsListSkeleton = () => (
  <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4">
    {[...Array(9)].map((_, index) => (
      <div className="skeleton h-[180px]" key={index}></div>
    ))}
  </div>
);

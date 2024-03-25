export const DevsListSkeleton = () => (
  <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
    {[...Array(9)].map((_, index) => (
      <div className="skeleton h-[180px] w-[170px]" key={index}></div>
    ))}
  </div>
);

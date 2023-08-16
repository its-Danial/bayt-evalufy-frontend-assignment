import { FC, memo } from "react";

type SkeletonProps = {
  caption: string;
};

// Pure component to display a skeleton while widgets are being rendered
const Skeleton: FC<SkeletonProps> = memo(({ caption }) => {
  return (
    <div className="h-full flex justify-center items-center rounded-md animate-pulse bg-slate-200">
      <h6 className="text-center p-2 font-medium text-slate-500">{caption}</h6>
    </div>
  );
});

Skeleton.displayName = "Skeleton";
export default Skeleton;

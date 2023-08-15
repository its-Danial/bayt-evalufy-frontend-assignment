import { Card } from "@tremor/react";
import { FC, memo } from "react";

type SkeletonProps = {};

// Pure component to display a skeleton while widgets are being rendered
const Skeleton: FC<SkeletonProps> = memo((props) => {
  return <Card className="animate-pulse bg-slate-200"></Card>;
});

Skeleton.displayName = "Skeleton";
export default Skeleton;

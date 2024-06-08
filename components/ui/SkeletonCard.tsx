import React from "react";
import { Skeleton } from "./skeleton";

const SkeletonCard = () => (
  <div className="flex flex-col space-y-4 p-4">
    <Skeleton className="h-[200px] w-[250px] rounded-lg bg-[#3b3b3b]/50 sm:h-[250px] sm:w-[320px]" />
    <div className="space-y-4">
      <Skeleton className="h-4 w-[100px] bg-[#3b3b3b]/50 sm:w-[200px]" />
      <Skeleton className="h-3 w-[150px] bg-[#3b3b3b]/50 sm:w-[250px]" />
      <Skeleton className="h-3 w-[150px] bg-[#3b3b3b]/50 sm:w-[250px]" />
    </div>
    <Skeleton className="h-12 w-full bg-[#3b3b3b]/50" />
  </div>
);

export default SkeletonCard;

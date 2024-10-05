import React from "react";
import { Skeleton } from "./skeleton";

const SkeletonCard = () => (
  <div className="w-full max-w-[370px] p-4">
    <div className="flex h-full max-w-sm flex-col space-y-4">
      {" "}
      {/* Added space-y-4 for gaps */}
      <div className="relative h-[256px] w-[338px]">
        <Skeleton className="h-full w-full rounded-t-lg bg-[#5b5b5b]/50" />
      </div>
      <div className="flex flex-1 flex-col justify-between space-y-4">
        {" "}
        {/* Added space-y-4 for gaps */}
        <Skeleton className="h-6 w-[150px] bg-[#5b5b5b]/50" />
        <Skeleton className="line-clamp-3 h-[70px] bg-[#3b3b3b]/50" />
        <div className="space-y-4">
          {" "}
          {/* Added space-y-4 for gap */}
          <Skeleton className="mb-2 inline-flex w-[25%] items-start justify-start rounded-md bg-[#5b5b5b]/50 py-3 text-sm font-semibold uppercase text-white" />
          <div className="flex flex-wrap gap-2">
            {" "}
            {/* Added gap-2 for gaps between badges */}
            <Skeleton className="h-6 w-[60px] bg-[#3b3b3b]/50" />
            <Skeleton className="h-6 w-[60px] bg-[#3b3b3b]/50" />
            <Skeleton className="h-6 w-[60px] bg-[#3b3b3b]/50" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonCard;

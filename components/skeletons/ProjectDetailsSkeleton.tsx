import { Skeleton } from "@/components/ui/skeleton";
import InstructionCardSkeleton from "./InstructionsSkeleton";

export default function ProjectDetailsSkeleton() {
  return (
    <div className="p-9">
      <div className="flex flex-col xmd:flex-row gap-6">
        <div className="xmd:w-[60%] p-8 bg-white rounded-xl border border-border flex flex-col gap-6">
          <div className="w-full h-[296px] flex items-center justify-center rounded-xl">
            <Skeleton className="w-full h-full rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-3/4 h-8" />
            <Skeleton className="w-full h-24" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-1/2 h-8" />
            <div className="flex flex-col gap-2">
              {[...Array(4)].map((_, idx) => (
                <Skeleton key={idx} className="w-full h-6" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-1/2 h-8" />
            <div className="flex flex-col gap-2">
              {[...Array(4)].map((_, idx) => (
                <Skeleton key={idx} className="w-full h-6" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-1/2 h-8" />
            <Skeleton className="w-full h-20" />
          </div>
        </div>
        <div className="xmd:w-[40%] flex flex-col gap-6">
          <InstructionCardSkeleton />
          <InstructionCardSkeleton />
        </div>
      </div>
    </div>
  );
}

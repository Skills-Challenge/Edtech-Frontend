import { Skeleton } from "@/components/ui/skeleton";

export default function InstructionCardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-xl border border-border h-full flex flex-col gap-4">
      <Skeleton className="w-1/3 h-6" />
      <Skeleton className="w-full h-4" />
      <div className="flex flex-col gap-3">
        {[...Array(7)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="flex flex-col gap-1">
              <Skeleton className="w-40 h-5" />
              <Skeleton className="w-24 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
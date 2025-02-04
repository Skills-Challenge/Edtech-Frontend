import { Skeleton } from "@/components/ui/skeleton";

export default function ChallengeCardSkeleton() {
  return (
    <div className="p-4 bg-white rounded-xl border border-border flex flex-col gap-4 w-full max-w-md">
      <div className="relative w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center"/>
      <Skeleton className="w-3/4 h-6" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-1/4 h-5" />
        <div className="flex gap-2">
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} className="w-20 h-8 rounded-lg" />
          ))}
        </div>
      </div>
      <Skeleton className="w-1/2 h-5" />
      <Skeleton className="w-1/3 h-5" />
      <Skeleton className="w-full h-10 rounded-md" />
    </div>
  );
}
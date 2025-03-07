import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <Skeleton className="h-[125px] w-full rounded-xl bg-dysto-dark-2" />
    </div>
  );
}

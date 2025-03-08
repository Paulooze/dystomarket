import { Skeleton } from '@/components/ui/skeleton';

export default function CompanySkeletonRow() {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <Skeleton className="h-[114px] w-full bg-gray-700 mb-2 rounded-none" />
    </div>
  );
}

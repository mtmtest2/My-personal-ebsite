import { Skeleton, SkeletonText } from '@/components/ui/States';

/** Loading shape for panel pages: header, a row of stats, then two panels. */
export default function PanelSkeleton() {
  return (
    <div role="status" aria-label="در حال بارگذاری">
      <Skeleton className="h-7 w-48" />
      <Skeleton className="mt-3 h-3.5 w-72 max-w-full" />
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="border-t border-rule pt-4">
            <Skeleton className="h-3.5 w-24" />
            <Skeleton className="mt-3 h-7 w-20" />
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        <div className="card p-6 xl:col-span-2">
          <Skeleton className="h-4 w-40" />
          <SkeletonText lines={4} className="mt-6" />
        </div>
        <div className="card p-6">
          <Skeleton className="h-4 w-28" />
          <SkeletonText lines={3} className="mt-6" />
        </div>
      </div>
    </div>
  );
}

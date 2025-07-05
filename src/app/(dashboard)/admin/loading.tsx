import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Admin</h1>
      <Skeleton className="h-5 w-48" />
    </div>
  );
}

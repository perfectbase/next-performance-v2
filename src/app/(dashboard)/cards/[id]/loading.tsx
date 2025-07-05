import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Item Details</h1>
        <Link href="/cards">
          <Button variant="outline">← Back to Cards</Button>
        </Link>
      </div>
      <div className="max-w-4xl">
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="mt-1 h-6 w-2/3" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <Skeleton className="h-7 w-20 rounded-full" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Skeleton className="mb-3 h-6 w-40" />
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex justify-between">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-32" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Skeleton className="mb-2 h-7 w-28" />
                  <div className="space-y-3">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-3/4" />
                  </div>
                </div>
                <div className="border-t pt-4">
                  <Skeleton className="mb-3 h-7 w-20" />
                  <div className="flex gap-3">
                    <Skeleton className="h-9 flex-1" />
                    <Skeleton className="h-9 flex-1" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

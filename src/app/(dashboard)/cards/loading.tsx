import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Cards</h1>
      <ItemCardSkeleton />
    </div>
  );
}

function ItemCardSkeleton() {
  return (
    <div className="@container">
      <div className="grid grid-cols-2 gap-6 @4xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            className="flex h-full flex-col transition-shadow hover:shadow-lg"
          >
            <CardHeader className="flex-shrink-0">
              <CardTitle className="truncate text-lg">
                <Skeleton className="h-7 w-3/4" />
              </CardTitle>
              <CardDescription className="line-clamp-3">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-end">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-8 w-20" />
                </div>
                <div className="border-t pt-3">
                  <Skeleton className="h-5 w-32" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

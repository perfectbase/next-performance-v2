import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getItem } from "@/lib/sdk";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function ItemDetailsPage({ params }: PageProps) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Item Details</h1>
        <Link href="/cards">
          <Button variant="outline">← Back to Cards</Button>
        </Link>
      </div>
      <Suspense fallback={<ItemDetailsSkeleton />}>
        <ItemDetails params={params} />
      </Suspense>
    </div>
  );
}

async function ItemDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const itemId = parseInt(id, 10);

  if (isNaN(itemId)) {
    notFound();
  }

  const item = await getItem(itemId);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <CardDescription className="mt-2 text-base">
                {item.description}
              </CardDescription>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="bg-primary text-primary-foreground inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
                {item.category}
              </span>
              <span className="text-3xl font-bold text-green-600">
                ${item.price}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Item Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ID:</span>
                    <span className="font-mono">{item.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{item.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-semibold">${item.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Created:</span>
                    <span>{formatDate(item.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="border-t pt-4">
                <h3 className="mb-3 text-lg font-semibold">Actions</h3>
                <div className="flex gap-3">
                  <Button className="flex-1">Add to Cart</Button>
                  <Button variant="outline" className="flex-1">
                    Save for Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ItemDetailsSkeleton() {
  return (
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
  );
}

import { cacheTag } from "next/cache";
import { Suspense } from "react";
import { getItems } from "@/lib/sdk";
import { ItemsTable, ItemsTableSkeleton } from "./_components/items-table";

export default function TablePage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Table</h1>
      <Suspense fallback={<ItemsTableSkeleton />}>
        <ItemsTableWrapper />
      </Suspense>
    </div>
  );
}

async function ItemsTableWrapper() {
  "use cache";
  cacheTag("items");

  const items = await getItems();
  return <ItemsTable data={items} />;
}

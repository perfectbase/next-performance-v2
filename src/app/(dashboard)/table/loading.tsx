import { ItemsTableSkeleton } from "./_components/items-table";

export default function Loading() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Table</h1>
      <ItemsTableSkeleton />
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/lib/sdk";
import { ItemsTable, ItemsTableSkeleton } from "./table-components";

export default function TablePage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Table</h1>
      <ItemsTableWrapper />
    </div>
  );
}

function ItemsTableWrapper() {
  const { data: items, status } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  if (status === "pending") return <ItemsTableSkeleton />;

  if (status === "error") return <div>Error</div>;

  return <ItemsTable data={items} />;
}

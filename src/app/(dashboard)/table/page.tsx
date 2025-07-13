import { getItems } from "@/lib/sdk";
import { ItemsTable } from "./_components/items-table";

export default function TablePage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Table</h1>
      <ItemsTableWrapper />
    </div>
  );
}

async function ItemsTableWrapper() {
  const items = await getItems();
  return <ItemsTable data={items} />;
}

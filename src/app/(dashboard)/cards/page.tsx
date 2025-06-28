import { getItems } from "@/lib/sdk";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardsPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Cards</h1>
      <ItemCards />
    </div>
  );
}

async function ItemCards() {
  const items = await getItems();

  return (
    <div className="@container">
      <div className="grid gap-6 @lg:grid-cols-2 @4xl:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.id}
            href={`/cards/${item.id}`}
            className="flex h-full cursor-pointer flex-col transition-shadow hover:shadow-lg"
          >
            <CardHeader className="flex-shrink-0">
              <CardTitle className="truncate text-lg" title={item.title}>
                {item.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-end">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-primary/10 text-primary ring-primary/20 mt-1 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    {item.category}
                  </span>
                  <span className="text-foreground text-2xl font-bold">
                    ${item.price}
                  </span>
                </div>
                <div className="text-muted-foreground border-t pt-3 text-sm">
                  Created: {formatDate(item.createdAt)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

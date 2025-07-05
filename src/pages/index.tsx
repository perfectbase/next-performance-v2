import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Home</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link href="/cards" className="active:[&_div]:bg-amber-100">
          <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Cards View</CardTitle>
              <CardDescription>Browse items in a card layout</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Each card is an actual link to the item.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/table" className="active:[&_div]:bg-amber-100">
          <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Table View</CardTitle>
              <CardDescription>
                Browse items in a structured table format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Each row has a click handler to navigate to the item.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

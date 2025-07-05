import { NextResponse } from "next/server";
import { auth } from "@/server/auth";
import { Item, mockItems } from "@/server/mock/items";

export type ItemResponse = {
  success: boolean;
  data: Item | null;
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  // Check session
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const { id } = await params;
  const itemId = parseInt(id, 10);

  if (isNaN(itemId)) {
    return NextResponse.json<ItemResponse>(
      {
        success: false,
        data: null,
      },
      { status: 400 },
    );
  }

  const item = mockItems.find((item) => item.id === itemId);

  if (!item) {
    return NextResponse.json<ItemResponse>(
      {
        success: false,
        data: null,
      },
      { status: 404 },
    );
  }

  return NextResponse.json<ItemResponse>({
    success: true,
    data: item,
  });
}

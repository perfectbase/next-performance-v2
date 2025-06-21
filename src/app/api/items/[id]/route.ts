import { NextResponse } from "next/server";
import { Item, mockItems } from "@/lib/mock";

export const dynamic = "force-dynamic";

export type ItemResponse = {
  success: boolean;
  data: Item | null;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
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

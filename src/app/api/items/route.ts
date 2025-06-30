import { NextResponse } from "next/server";
import { Item, mockItems } from "@/server/mock/items";

export type ItemsResponse = {
  success: boolean;
  data: Item[];
  total: number;
};

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json<ItemsResponse>({
    success: true,
    data: mockItems,
    total: mockItems.length,
  });
}

import { NextResponse } from "next/server";
import { Item, mockItems } from "@/lib/mock";

export const dynamic = "force-dynamic";

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

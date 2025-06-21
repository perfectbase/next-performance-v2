import { NextResponse } from "next/server";
import { auth } from "@/server/auth";
import { Item, mockItems } from "@/server/mock/items";

export type ItemsResponse = {
  success: boolean;
  data: Item[];
  total: number;
};

export async function GET() {
  // Check session
  const session = await auth();
  console.log("session", session);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json<ItemsResponse>({
    success: true,
    data: mockItems,
    total: mockItems.length,
  });
}

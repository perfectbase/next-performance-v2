import { auth } from "@/server/auth";
import { mockItems } from "@/server/mock/items";

export async function getItems() {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("User is not signed-in");
  }

  // Simulate query delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockItems;
}

export async function getItem(id: number) {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("User is not signed-in");
  }

  // Simulate query delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const item = mockItems.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  return item;
}

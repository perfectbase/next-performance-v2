import { auth } from "@/server/auth";
import { mockItems } from "@/server/mock/items";

export async function getItems() {
  // Simulate query delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockItems;
}

export async function getItem(id: number) {
  "use cache";
  console.log("Get Item", new Date().toISOString());

  // Simulate query delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const item = mockItems.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  return item;
}

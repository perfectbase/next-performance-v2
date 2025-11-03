import { mockItems } from "@/server/mock/items";

export async function getCachedItems() {
  "use cache: remote";
  // Simulate query delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockItems;
}

export async function getCachedItem(id: number) {
  "use cache: remote";
  // Simulate query delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const item = mockItems.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  return item;
}

import { unstable_cache } from "next/cache";
import { mockItems } from "@/server/mock/items";

export const getCachedItems = unstable_cache(
  async () => {
    // Simulate query delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    return mockItems;
  },
  undefined,
  {
    tags: ["items"],
  },
);

export const getCachedItem = unstable_cache(
  async (id: number) => {
    // Simulate query delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    const item = mockItems.find((item) => item.id === id);

    if (!item) {
      return null;
    }

    return item;
  },
  undefined,
  {
    tags: ["items"],
  },
);

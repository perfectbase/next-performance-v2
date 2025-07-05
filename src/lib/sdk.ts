import { Item } from "@/server/mock/items";
import { ItemResponse } from "@/app/api/items/[id]/route";
import { ItemsResponse } from "@/app/api/items/route";
import { getBaseUrl } from "./utils";

export async function getItems(): Promise<Item[]> {
  try {
    const response = await fetch(`${getBaseUrl()}/api/items`);

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    const data: ItemsResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}

export async function getItem(id: number): Promise<Item | null> {
  try {
    const response = await fetch(`${getBaseUrl()}/api/items/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch item");
    }

    const data: ItemResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
}

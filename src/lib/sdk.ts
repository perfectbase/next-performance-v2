import { Item, ItemsResponse } from "@/app/api/items/route";
import { getBaseUrl } from "./utils";

export async function getItems(): Promise<Item[]> {
  try {
    const response = await fetch(`${getBaseUrl()}/api/items`, {
      cache: "no-store",
    });

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

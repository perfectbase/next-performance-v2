"use cache";

import ItemDetailsPage from "../../cards/[id]/page";

export async function generateStaticParams() {
  return [{ id: "1" }];
}

// The details page is the same for both cards and tables
export default ItemDetailsPage;

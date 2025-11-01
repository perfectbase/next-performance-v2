import { NextResponse } from "next/server";
import { auth } from "@/server/auth";

export default async function proxy() {
  // Just a sample proxy to log the user
  const session = await auth();
  console.log("User:", session?.user);
  return NextResponse.next();
}

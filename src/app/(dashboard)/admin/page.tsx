import { notFound } from "next/navigation";
import { auth } from "@/server/auth";

export default async function AdminPage() {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Admin</h1>
      <p className="text-muted-foreground">This is an admin only page.</p>
    </div>
  );
}

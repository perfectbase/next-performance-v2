import { useAppContext } from "../_components/app-context-provider";
import NotFound from "../_components/not-found";

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Admin</h1>
      <AdminContent />
    </div>
  );
}

function AdminContent() {
  const { session } = useAppContext();
  if (session.user.role !== "admin") {
    return <NotFound />;
  }

  return <p className="text-muted-foreground">This is an admin only page.</p>;
}

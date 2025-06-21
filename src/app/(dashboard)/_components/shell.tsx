import { Sidebar } from "./sidebar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <Sidebar />
      <main className="ml-[calc(var(--sidebar-width)+--spacing(8))] p-8">
        {children}
      </main>
    </div>
  );
}

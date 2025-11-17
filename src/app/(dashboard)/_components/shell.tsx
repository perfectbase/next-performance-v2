import { Suspense } from "react";
import { Sidebar } from "./sidebar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <Suspense>
        <Sidebar />
      </Suspense>
      <main className="ml-[calc(var(--sidebar-width)+--spacing(8))] flex min-h-screen flex-col p-8">
        {children}
      </main>
    </div>
  );
}

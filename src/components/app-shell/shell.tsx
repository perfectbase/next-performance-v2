"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AppContextProvider } from "./app-context-provider";
import { Sidebar } from "./sidebar";

export default function Shell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });

  if (!session) {
    return null;
  }

  return (
    <AppContextProvider session={session}>
      <div className="bg-background min-h-screen">
        <Sidebar />
        <main className="ml-[calc(var(--sidebar-width)+--spacing(8))] flex min-h-screen flex-col p-8">
          {children}
        </main>
      </div>
    </AppContextProvider>
  );
}

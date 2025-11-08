"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { AppContextProvider } from "./_components/app-context-provider";
import Shell from "./_components/shell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  if (!session) {
    return null;
  }

  return (
    <AppContextProvider session={session}>
      <Shell>{children}</Shell>
    </AppContextProvider>
  );
}

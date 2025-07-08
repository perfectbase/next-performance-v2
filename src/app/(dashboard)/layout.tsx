"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AppContextProvider } from "./_components/app-context-provider";
import Shell from "./_components/shell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/signin");
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

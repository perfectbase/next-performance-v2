import { redirect } from "next/navigation";
import { Suspense } from "react";
import { auth } from "@/server/auth";
import { AppContextProvider } from "./_components/app-context-provider";
import Shell from "./_components/shell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <AuthGate>{children}</AuthGate>
    </Suspense>
  );
}

async function AuthGate({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }

  return (
    <AppContextProvider session={session}>
      <Shell>{children}</Shell>
    </AppContextProvider>
  );
}

import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { AppContextProvider } from "./_components/app-context-provider";
import Shell from "./_components/shell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

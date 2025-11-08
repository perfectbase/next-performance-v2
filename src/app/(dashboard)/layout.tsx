import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import Shell from "./_components/shell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Shell>
        <Suspense>{children}</Suspense>
      </Shell>
    </SessionProvider>
  );
}

import { redirect } from "next/navigation";
import { Suspense } from "react";
import { auth } from "@/server/auth";
import { SignInForm } from "./_components/signin-form";

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <SignInGate />
    </Suspense>
  );
}

async function SignInGate() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return <SignInForm />;
}

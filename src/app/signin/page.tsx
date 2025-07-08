import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { SignInForm } from "./_components/signin-form";

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return <SignInForm />;
}

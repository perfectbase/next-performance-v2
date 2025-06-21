"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAppForm } from "@/components/form/hooks/form-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorText } from "@/components/ui/error-text";

export default function SignInPage() {
  const router = useRouter();
  const [signInError, setSignInError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const result = await signIn("credentials", {
        username: value.username,
        password: value.password,
        redirect: false,
        callbackUrl: "/",
      });
      if (result?.error) {
        setSignInError("Invalid username or password");
      } else {
        router.refresh();
      }
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="space-y-6"
            >
              <form.AppForm>
                <form.AppField name="username">
                  {(field) => (
                    <field.TextField
                      label="Username"
                      placeholder="admin/user"
                    />
                  )}
                </form.AppField>
                <form.AppField name="password">
                  {(field) => (
                    <field.TextField
                      label="Password"
                      type="password"
                      placeholder="admin/user"
                    />
                  )}
                </form.AppField>
                {signInError && <ErrorText>{signInError}</ErrorText>}
                <form.SubmitButton label="Sign In" className="w-full" />
              </form.AppForm>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-background flex grow items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-foreground mb-4 text-6xl font-bold">404</h1>

        <h2 className="text-foreground mb-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button>
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>

          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

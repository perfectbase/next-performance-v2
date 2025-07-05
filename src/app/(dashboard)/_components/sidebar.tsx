"use client";

import {
  CreditCardIcon,
  HomeIcon,
  Loader2Icon,
  LogOutIcon,
  ShieldIcon,
  Table2Icon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link, { useLinkStatus } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import BlueskyIcon from "@/components/icons/bluesky";
import GitHubIcon from "@/components/icons/github";
import XIcon from "@/components/icons/x";
import YouTubeIcon from "@/components/icons/youtube";
import { Button } from "@/components/ui/button";
import { useAppContext } from "./app-context-provider";

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  adminOnly?: boolean;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="mr-3 h-4 w-4" />,
  },
  {
    name: "Cards",
    href: "/cards",
    icon: <CreditCardIcon className="mr-3 h-4 w-4" />,
  },
  {
    name: "Table",
    href: "/table",
    icon: <Table2Icon className="mr-3 h-4 w-4" />,
  },
  {
    name: "Admin",
    href: "/admin",
    icon: <ShieldIcon className="mr-3 h-4 w-4" />,
    adminOnly: true,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { session } = useAppContext();

  const filteredNavigationItems = NAVIGATION_ITEMS.filter(
    (item) => !item.adminOnly || session.user.role === "admin",
  );

  return (
    <div className="bg-sidebar border-sidebar-border fixed top-4 bottom-4 left-4 z-50 flex w-(--sidebar-width) flex-col rounded-lg border shadow-lg">
      {/* Header */}
      <div className="border-sidebar-border border-b px-6 py-4">
        <h2 className="text-sidebar-foreground text-md font-mono font-semibold">
          Next.js Performance
        </h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2 p-4">
        {filteredNavigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground h-10 w-full justify-start px-3",
                  isActive &&
                    "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground",
                  process.env.NEXT_PUBLIC_CLICK_HINT === "true" &&
                    "active:bg-amber-200 active:text-amber-800",
                )}
              >
                {item.icon}
                {item.name}
                <LinkLoadingIndicator />
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-sidebar-border flex flex-col gap-2 border-t px-4 py-2">
        <div className="flex items-start justify-evenly gap-2">
          <Image
            src="/ravi.webp"
            alt="Ravi"
            width={30}
            height={30}
            className="rounded-full border border-gray-700"
          />
          <Link
            href="https://github.com/perfectbase/next-performance"
            aria-label="GitHub"
            className="rounded transition-colors hover:opacity-80"
          >
            <GitHubIcon width={30} height={30} />
          </Link>
          <Link
            href="https://x.com/RaviCoding"
            aria-label="X"
            className="rounded transition-colors hover:opacity-80"
          >
            <XIcon width={30} height={30} />
          </Link>
          <Link
            href="https://bsky.app/profile/ravicoding.bsky.social"
            aria-label="Bluesky"
            className="rounded transition-colors hover:opacity-80"
          >
            <BlueskyIcon width={30} height={30} className="px-0.5" />
          </Link>
          <Link
            href="https://www.youtube.com/@perfectbase"
            aria-label="YouTube"
            className="rounded transition-colors hover:opacity-80"
          >
            <YouTubeIcon width={30} height={30} />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="text-center text-xs font-semibold">by: Ravi</div>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}

function LinkLoadingIndicator() {
  const { pending } = useLinkStatus();

  return (
    <>
      {pending && (
        <div className="fixed inset-0 left-[calc(var(--sidebar-width)+2rem)] z-40 backdrop-blur-sm" />
      )}
      {pending ? <Loader2Icon className="h-4 w-4 animate-spin" /> : null}
    </>
  );
}

function SignOutButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() =>
        startTransition(async () => {
          await signOut({ redirect: false });
          router.refresh();
        })
      }
      disabled={isPending}
    >
      <LogOutIcon className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  );
}

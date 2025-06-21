"use client";

import { CreditCard, FileText, Table2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import BlueskyIcon from "@/components/icons/bluesky";
import GitHubIcon from "@/components/icons/github";
import XIcon from "@/components/icons/x";
import YouTubeIcon from "@/components/icons/youtube";
import { Button } from "@/components/ui/button";

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const NAVIGATION_ITEMS = [
  {
    name: "Cards",
    href: "/",
    icon: <CreditCard className="mr-3 h-4 w-4" />,
  },
  {
    name: "Table",
    href: "/table",
    icon: <Table2 className="mr-3 h-4 w-4" />,
  },
  {
    name: "Static",
    href: "/static",
    icon: <FileText className="mr-3 h-4 w-4" />,
  },
] as const satisfies NavigationItem[];

export function Sidebar() {
  const pathname = usePathname();

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
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="block">
              <Button
                variant="ghost"
                className={cn(
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground h-10 w-full justify-start px-3",
                  isActive &&
                    "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground",
                )}
              >
                {item.icon}
                {item.name}
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
        <p className="text-center text-xs font-semibold">by: Ravi</p>
      </div>
    </div>
  );
}

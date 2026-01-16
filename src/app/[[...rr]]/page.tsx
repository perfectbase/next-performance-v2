"use client";

import dynamic from "next/dynamic";

const ReactRouterApp = dynamic(() => import("./_rr-app"), {
  ssr: false,
});

export default function Page() {
  return <ReactRouterApp />;
}

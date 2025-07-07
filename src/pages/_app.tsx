import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Fragment } from "react";
import Shell from "@/components/app-shell/shell";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient();

export type CustomComponent<P = object, IP = P> = NextPage<P, IP> & {
  isPublic?: boolean;
};

type CustomAppProps = AppProps & {
  Component: CustomComponent;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const MaybeAppShell = Component.isPublic ? Fragment : Shell;

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <MaybeAppShell>
            <Component {...pageProps} />
          </MaybeAppShell>
        </QueryClientProvider>
      </SessionProvider>
    </div>
  );
}

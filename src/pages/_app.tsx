import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { Fragment } from "react";
import Shell from "@/components/app-shell/shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

  console.log(pageProps);

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

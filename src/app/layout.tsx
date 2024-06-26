import "~/styles/globals.scss";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

import { TopNav } from "./_components/topnav";
import { Toaster } from "~/components/ui/sonner";
import { CSPostHogProvider } from "./_analytics/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Modern Gallery | Trishab",
  description:
    "Production-grade modern gallery app built with T3 and other latest technologies.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en">
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

          <body className={`${grotesk.className} ${inter.variable}`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-auto">{children}</main>
            </div>

            {modal}

            <div id="modal-root"></div>
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}

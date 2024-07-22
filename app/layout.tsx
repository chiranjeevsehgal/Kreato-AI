import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import { dark } from '@clerk/themes';

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kreato AI",
  description: "AI Content Generation",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#FFFFFF',
        },
        elements: {
          avatarBox: "border-2 border-purple-400",
          userButtonPopoverCard: "bg-gray-800 border border-gray-700",
          userButtonPopoverText: "text-white",
          userButtonPopoverActionButtonText: "text-white",
          userButtonPopoverActionButtonIcon: "text-white",
          userButtonPopoverFooter: "border-t border-gray-700",
        }
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>

  );
}

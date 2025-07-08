import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { colors } from "@/constants/colors";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zura • We create emotions",
  description: "Welcome to zura a real time meet",
  other: {
    "google-site-verification": "4ghYVMR93ZEDLksGCqb_-rfyijzNRLMn0w5VNi5fcG4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#2a2a2a",
            colorInputBackground: "#3a3a3a",
            colorInputText: "#fff",
          },
        }}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
          style={{
            backgroundColor: colors.dark.secondary,
          }}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}

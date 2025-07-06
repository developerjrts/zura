import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <main className="flex flex-col min-h-screen">{children}</main>;
}

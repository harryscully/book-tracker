import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: "Book Tracker",
  description: "Track your reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className="min-h-svh bg-base-200">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

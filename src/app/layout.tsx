import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import Navbar from "@/components/Navbar";

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
      <body className="min-h-svh bg-base-200 flex flex-col">
        <QueryProvider>
          <Navbar />
          <main className="flex-1 flex flex-col h-full px-4 py-6 md:px-8">
            {children}
          </main>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p className="text-sm">book-tracker © 2026</p>
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}

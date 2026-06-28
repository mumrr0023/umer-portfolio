"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-500 bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
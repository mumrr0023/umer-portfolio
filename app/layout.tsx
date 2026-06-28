import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Muhammad Umer | Creative Technologist & Digital Strategist",
  description: "Portfolio of Muhammad Umer, an aspiring technopreneur focused on AI-powered workflows, digital branding, content systems, and creative technology.",
  keywords: ["Muhammad Umer", "Portfolio", "AI Automation", "Digital Marketing", "Visual Design", "Creative Technologist"],
  authors: [{ name: "Muhammad Umer" }],
  openGraph: {
    title: "Muhammad Umer | Creative Technologist",
    description: "Blending AI automation, visual systems, digital strategy, and modern branding.",
    url: "https://umer-portfolio.vercel.app",
    siteName: "Muhammad Umer Portfolio",
    images: [
      {
        url: "/images/profile-pic.webp",
        width: 800,
        height: 600,
        alt: "Muhammad Umer Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Umer | Creative Technologist",
    description: "Blending AI automation, visual systems, digital strategy, and modern branding.",
    images: ["/images/profile-pic.webp"],
  },
};

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
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umar Farooq — Websites",
  description: "Shop websites and live tools by Umar Farooq.",
  icons: {
    icon: "/icon-192.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}

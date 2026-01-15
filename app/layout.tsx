import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "עטר תעסה - מאמנת הורים מקצועית",
  description: "מאמנת הורים מקצועית המסייעת למשפחות ליצור קשרים בריאים וטובים יותר",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

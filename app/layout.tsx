import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magic Knights Portfolio | Black Clover Inspired",
  description: "A portfolio inspired by Black Clover anime - showcasing magical abilities and grimoire powers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} ${inter.variable} antialiased bg-[#0a0a0f] text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

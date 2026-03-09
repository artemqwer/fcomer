import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "ESTER WUGMAN | be kosher & pretty",
  description: "Modern fashion store with a focus on minimalism and elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} antialiased bg-white text-neutral-900 min-h-screen md:min-h-[1874px] flex flex-col relative max-w-[1920px] mx-auto`}>
        <Header />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        {/* On desktop, absolute positioning enforces the exact 1632px Y-coordinate from the top frame edge */}
        <div className="w-full md:absolute md:top-[1632px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}

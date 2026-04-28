import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartCalc – Free Online Calculators for Health & Finance",
  description: "Use SmartCalc for fast, accurate health and finance calculators including BMI, EMI, calorie, and more.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className="antialiased min-h-screen bg-[#F9FAFB] text-[#111827] flex flex-col overflow-x-hidden"
      >
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 w-full flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

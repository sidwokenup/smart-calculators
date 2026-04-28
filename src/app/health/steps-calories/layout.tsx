import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steps to Calories Calculator | SmartKalc",
  description: "Estimate the number of calories burned and distance walked from your daily steps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


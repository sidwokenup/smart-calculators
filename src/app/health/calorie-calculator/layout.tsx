import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calorie Needs Calculator | SmartKalc",
  description: "Estimate your daily calorie requirements for weight loss, gain, or maintenance instantly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


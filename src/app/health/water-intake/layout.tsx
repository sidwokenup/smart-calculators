import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Intake Calculator | SmartKalc",
  description: "Find out exactly how much water you should drink daily based on your weight and activity level.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Cycle Calculator | SmartKalc",
  description: "Find the best time to sleep or wake up by calculating optimal 90-minute sleep cycles.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


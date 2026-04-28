import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget Planner Calculator | SmartKalc",
  description: "Plan and manage your monthly budget with our free online calculator.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


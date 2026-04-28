import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Expense Calculator | SmartCalc",
  description: "Track and calculate your total monthly and daily spending with our free online expense calculator.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

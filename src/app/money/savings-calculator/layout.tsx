import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savings Goal Calculator | SmartCalc",
  description: "Calculate how long it will take to reach your savings goal with our free online tool.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator | SmartCalc",
  description: "Estimate your ideal body weight based on your height and gender using our free calculator.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

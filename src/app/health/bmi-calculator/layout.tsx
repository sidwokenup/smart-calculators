import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator | SmartCalc",
  description: "Calculate your BMI instantly with our free online tool.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator | SmartCalc",
  description: "Calculate your monthly loan EMI instantly with our free online tool.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salary to Hourly Calculator | SmartKalc",
  description: "Convert your annual salary into an hourly wage instantly with our free tool.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


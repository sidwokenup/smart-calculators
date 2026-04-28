import Link from "next/link";

interface CalculatorCardProps {
  title: string;
  description: string;
  href: string;
}

export default function CalculatorCard({
  title,
  description,
  href,
}: CalculatorCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 transition-all duration-200 hover:shadow-md hover:-translate-y-[2px] cursor-pointer h-full flex flex-col">
        <h3 className="font-medium text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-sm text-gray-500 mb-4 flex items-center flex-wrap">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-900 hover:underline transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2 text-gray-400">&gt;</span>}
        </span>
      ))}
    </nav>
  );
}

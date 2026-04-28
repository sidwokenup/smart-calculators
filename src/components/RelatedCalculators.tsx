import CalculatorCard from "./CalculatorCard";

interface RelatedCalculatorsProps {
  calculators: { title: string; description: string; href: string }[];
}

export default function RelatedCalculators({ calculators }: RelatedCalculatorsProps) {
  if (!calculators || calculators.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc, index) => (
          <CalculatorCard
            key={index}
            title={calc.title}
            description={calc.description}
            href={calc.href}
          />
        ))}
      </div>
    </section>
  );
}

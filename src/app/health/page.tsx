import CalculatorCard from "@/components/CalculatorCard";
import { healthCalculators } from "@/lib/calculators";

export default function HealthPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold mb-8 text-gray-900">
        Health Calculators
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthCalculators.map((calc, index) => (
          <CalculatorCard
            key={index}
            title={calc.title}
            description={calc.description}
            href={calc.href}
          />
        ))}
      </div>
    </div>
  );
}

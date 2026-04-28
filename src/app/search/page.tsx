import CalculatorCard from "@/components/CalculatorCard";
import { healthCalculators, moneyCalculators } from "@/lib/calculators";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results | SmartCalc",
  description: "Search for free health and finance calculators on SmartCalc.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const rawQuery = params.q;
  const query = typeof rawQuery === 'string' ? rawQuery.toLowerCase() : "";
  
  const allCalculators = [...healthCalculators, ...moneyCalculators];
  
  const results = allCalculators.filter(calc => 
    calc.title.toLowerCase().includes(query) || 
    calc.description.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-2 text-gray-900">Search Results</h1>
      <p className="text-base text-gray-600 mb-8">
        {query ? `Showing results for "${query}"` : "Enter a search term to find calculators."}
      </p>
      
      {results.length > 0 && query ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((calc, index) => (
            <CalculatorCard key={index} {...calc} />
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-lg font-medium text-gray-500">No results found.</p>
          <p className="text-sm text-gray-400 mt-2">Try adjusting your search keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCalculators.map((calc, index) => (
            <CalculatorCard key={index} {...calc} />
          ))}
        </div>
      )}
    </div>
  );
}

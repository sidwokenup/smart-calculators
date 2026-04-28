export const metadata = {
  title: "Terms & Conditions | SmartKalc",
  description: "Read the Terms & Conditions for using SmartKalc.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Terms & Conditions</h1>
      <div className="prose prose-gray">
        <p className="text-gray-600 mb-4">Last updated: April 2026</p>
        
        <h2 className="text-xl font-medium mt-6 mb-3">1. General Usage</h2>
        <p className="text-gray-600 mb-4">
          All calculators and tools provided on SmartKalc are for informational and educational purposes only. They are not intended to replace professional financial or medical advice.
        </p>
        
        <h2 className="text-xl font-medium mt-6 mb-3">2. No Liability</h2>
        <p className="text-gray-600 mb-4">
          SmartKalc assumes no liability for any incorrect calculations or any actions taken based on the results provided by our tools. The results are estimates based on standard formulas.
        </p>
        
        <h2 className="text-xl font-medium mt-6 mb-3">3. User Responsibility</h2>
        <p className="text-gray-600 mb-4">
          Users are solely responsible for their own decisions. Always consult with a certified professional before making any significant financial, health, or lifestyle changes.
        </p>
      </div>
    </div>
  );
}

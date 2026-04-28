export const metadata = {
  title: "About | SmartKalc",
  description: "Learn more about SmartKalc, your trusted platform for free online health and finance calculators.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">About SmartKalc</h1>
      <div className="prose prose-gray">
        <p className="text-gray-600 mb-4">
          Welcome to SmartKalc, your go-to destination for fast, accurate, and easy-to-use online calculators.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to provide everyday tools that help you make better decisions regarding your health and finances. Whether you're tracking your daily caloric needs, planning a monthly budget, or calculating an EMI for your next big purchase, SmartKalc delivers precise results with a clean, minimal interface.
        </p>
        <p className="text-gray-600">
          We believe that complex calculations should be simple, accessible, and completely free. We do not store your personal data, ensuring your privacy is always protected while using our tools.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Privacy Policy | SmartKalc",
  description: "Read the Privacy Policy for SmartKalc. We value your privacy and do not collect personal data from our calculators.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <div className="prose prose-gray">
        <p className="text-gray-600 mb-4">Last updated: April 2026</p>
        <p className="text-gray-600 mb-4">
          At SmartKalc, we value and respect your privacy. This Privacy Policy outlines the types of information we collect, how it's used, and how we protect your personal data when you use our website.
        </p>
        <h2 className="text-xl font-medium mt-6 mb-3">1. Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          We do not require you to create an account, nor do we actively collect any personal identifiable information (PII) such as your name, email address, or phone number to use our calculators.
        </p>
        <h2 className="text-xl font-medium mt-6 mb-3">2. Calculator Data</h2>
        <p className="text-gray-600 mb-4">
          Any data you input into our calculators (such as height, weight, salary, or budget details) is processed directly within your browser. We do not store, save, or transmit this sensitive information to our servers.
        </p>
        <h2 className="text-xl font-medium mt-6 mb-3">3. Analytics and Cookies</h2>
        <p className="text-gray-600 mb-4">
          We may use basic analytics tools to understand how visitors interact with our website to improve our services. These tools may use cookies to collect non-personal data, such as your device type, browser, and pages visited.
        </p>
        <h2 className="text-xl font-medium mt-6 mb-3">4. Changes to This Policy</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}

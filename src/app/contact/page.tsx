export const metadata = {
  title: "Contact Us | SmartKalc",
  description: "Get in touch with the SmartKalc support team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <div className="prose prose-gray">
        <p className="text-gray-600 mb-8">
          Have questions, suggestions, or need help? Reach out to us using the information below.
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6 max-w-md">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Email</h3>
            <a href="mailto:support@smartkalc.com" className="text-lg font-medium text-indigo-600 hover:underline">
              support@smartkalc.com
            </a>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Phone</h3>
            <p className="text-lg font-medium text-gray-900">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Address</h3>
            <p className="text-lg font-medium text-gray-900">
              123 Innovation Drive<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

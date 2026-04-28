import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10">
      {/* Hero Section */}
      <section className="mt-16 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-semibold mb-4">
          Smart Calculators for Everyday Life
        </h1>
        <p className="text-base text-gray-600 max-w-2xl">
          Fast, simple tools for health and finance
        </p>
      </section>

      {/* Category Section */}
      <section className="py-12 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Health Calculators Card */}
          <Link href="/health" className="block group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 h-full flex flex-col items-center text-center border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium mb-2">Health Calculators</h2>
              <p className="text-base text-gray-600">
                Track your BMI, macros, calories, and more with our simple health tools.
              </p>
            </div>
          </Link>

          {/* Money Calculators Card */}
          <Link href="/money" className="block group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 h-full flex flex-col items-center text-center border border-gray-100">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium mb-2">Money Calculators</h2>
              <p className="text-base text-gray-600">
                Plan your finances with our loan, mortgage, and savings calculators.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

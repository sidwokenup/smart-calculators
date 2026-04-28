"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { moneyCalculators } from "@/lib/calculators";

export default function BudgetPlanner() {
  const [income, setIncome] = useState<string>("");
  const [rent, setRent] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [transport, setTransport] = useState<string>("");
  const [utilities, setUtilities] = useState<string>("");
  const [entertainment, setEntertainment] = useState<string>("");
  const [other, setOther] = useState<string>("");

  const calculateBudget = () => {
    // Treat empty as 0
    const inc = parseFloat(income) || 0;
    const r = parseFloat(rent) || 0;
    const f = parseFloat(food) || 0;
    const t = parseFloat(transport) || 0;
    const u = parseFloat(utilities) || 0;
    const e = parseFloat(entertainment) || 0;
    const o = parseFloat(other) || 0;

    const totalExpenses = r + f + t + u + e + o;
    const balance = inc - totalExpenses;

    // Show result only if user enters something
    if (inc === 0 && totalExpenses === 0) return null;

    let savingsPercent = 0;
    if (inc > 0) {
      savingsPercent = (balance / inc) * 100;
    }

    return {
      totalExpenses,
      balance,
      savingsPercent: parseFloat(savingsPercent.toFixed(1)),
      isSaving: balance >= 0,
    };
  };

  const result = calculateBudget();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Money", href: "/money" },
          { label: "Budget Planner" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Budget Planner
        </h1>
        <p className="text-base text-gray-600">
          Plan and manage your monthly budget
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Income Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Income</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="income" className="text-sm font-medium text-gray-700">
                Monthly Income (₹)
              </label>
              <input
                type="number"
                id="income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="e.g. 50000"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
              />
            </div>
          </div>

          {/* Expenses Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Expenses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="rent" className="text-sm font-medium text-gray-700">
                  Rent (₹)
                </label>
                <input
                  type="number"
                  id="rent"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  placeholder="e.g. 15000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="food" className="text-sm font-medium text-gray-700">
                  Food (₹)
                </label>
                <input
                  type="number"
                  id="food"
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                  placeholder="e.g. 8000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="transport" className="text-sm font-medium text-gray-700">
                  Transport (₹)
                </label>
                <input
                  type="number"
                  id="transport"
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  placeholder="e.g. 3000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="utilities" className="text-sm font-medium text-gray-700">
                  Utilities (₹)
                </label>
                <input
                  type="number"
                  id="utilities"
                  value={utilities}
                  onChange={(e) => setUtilities(e.target.value)}
                  placeholder="e.g. 2000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="entertainment" className="text-sm font-medium text-gray-700">
                  Entertainment (₹)
                </label>
                <input
                  type="number"
                  id="entertainment"
                  value={entertainment}
                  onChange={(e) => setEntertainment(e.target.value)}
                  placeholder="e.g. 4000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="other" className="text-sm font-medium text-gray-700">
                  Other (₹)
                </label>
                <input
                  type="number"
                  id="other"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  placeholder="e.g. 3000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                />
              </div>
            </div>
          </div>

          {/* Result Display */}
          {result !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-3 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Total Expenses:</span>
                  <span className="text-xl font-bold text-gray-900">
                    ₹{result.totalExpenses.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-gray-600 font-medium">Remaining Balance:</span>
                  <span className={`text-2xl font-bold ${result.isSaving ? 'text-green-700' : 'text-red-700'}`}>
                    ₹{result.balance.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Smart UX Message */}
              <div className={`p-4 rounded-xl border text-center ${result.isSaving ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                <p className={`font-semibold ${result.isSaving ? 'text-green-800' : 'text-red-800'}`}>
                  {result.balance > 0 ? "You are saving money 👍" : result.balance === 0 ? "You are breaking even." : "You are overspending ⚠️"}
                </p>
                {parseFloat(income) > 0 && result.balance > 0 && (
                  <p className="text-sm mt-1 font-medium text-green-700">
                    Savings: {result.savingsPercent}% of income
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100 text-center text-gray-500 font-medium">
              Enter values to see results
            </div>
          )}
        </div>
      </div>

      {/* SEO & FAQs Section */}
      <div className="mt-16 max-w-2xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            How to Plan a Budget
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Planning a budget is the foundation of personal finance. It requires tracking your incoming cash flow and mapping it against your outgoing expenses. A well-planned budget helps you avoid debt, build an emergency fund, and steadily work towards financial independence. Start by listing all fixed expenses, then limit variable expenses to ensure you're saving a portion of your income each month.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What is a good savings percentage?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The 50/30/20 rule is a highly recommended baseline. It states that you should aim to save at least 20% of your after-tax income. However, depending on your financial goals—like retiring early or buying a home—saving 30% or even 40% is considered excellent.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How to reduce expenses?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The fastest way to reduce expenses is to audit your "Entertainment" and "Other" categories. Cancel unused subscriptions, limit dining out, and delay non-essential purchases using the "30-day rule." For fixed expenses like "Rent" or "Utilities," consider finding a roommate or negotiating rates.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={moneyCalculators.filter((c) =>
          ["Savings Goal Calculator", "Monthly Expense Calculator", "EMI Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

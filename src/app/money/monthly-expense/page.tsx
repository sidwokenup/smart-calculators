"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { moneyCalculators } from "@/lib/calculators";

export default function MonthlyExpenseCalculator() {
  const [rent, setRent] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [transport, setTransport] = useState<string>("");
  const [other, setOther] = useState<string>("");

  const calculateExpenses = () => {
    // Treat empty inputs as 0, prevent NaN
    const r = parseFloat(rent) || 0;
    const f = parseFloat(food) || 0;
    const t = parseFloat(transport) || 0;
    const o = parseFloat(other) || 0;

    const total = r + f + t + o;

    if (total <= 0) return null;

    const daily = Math.round(total / 30);

    return {
      total: Math.round(total),
      daily: daily,
      breakdown: {
        rent: r,
        food: f,
        transport: t,
        other: o,
      },
    };
  };

  const result = calculateExpenses();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Money", href: "/money" },
          { label: "Monthly Expense Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Monthly Expense Calculator
        </h1>
        <p className="text-base text-gray-600">
          Track and calculate your monthly spending
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Rent Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="rent" className="text-sm font-medium text-gray-700">
              Rent & Housing (₹)
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

          {/* Food Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="food" className="text-sm font-medium text-gray-700">
              Food & Groceries (₹)
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

          {/* Transport Input */}
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

          {/* Other Expenses Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="other" className="text-sm font-medium text-gray-700">
              Other Expenses (₹)
            </label>
            <input
              type="number"
              id="other"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Result Display */}
          {result !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-red-50 rounded-xl border border-red-100 text-center">
                <span className="text-red-700 text-sm font-medium mb-2 uppercase tracking-wider">Total Monthly Expense</span>
                <span className="text-4xl font-bold text-red-900 mb-1">
                  ₹{result.total.toLocaleString('en-IN')}
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
                <span className="text-orange-700 text-sm font-medium mb-1 uppercase tracking-wider">Daily Expense</span>
                <span className="text-2xl font-bold text-orange-900">
                  ₹{result.daily.toLocaleString('en-IN')} <span className="text-base font-medium text-orange-700">/ day</span>
                </span>
              </div>

              {/* Extra UX: Breakdown */}
              <div className="mt-2 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">Expense Breakdown</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rent:</span>
                    <span className="font-semibold text-gray-900">₹{result.breakdown.rent.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Food:</span>
                    <span className="font-semibold text-gray-900">₹{result.breakdown.food.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Transport:</span>
                    <span className="font-semibold text-gray-900">₹{result.breakdown.transport.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Other:</span>
                    <span className="font-semibold text-gray-900">₹{result.breakdown.other.toLocaleString('en-IN')}</span>
                  </div>
                </div>
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
            Why Tracking Expenses Matters
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Understanding where your money goes is the first step toward financial freedom. By categorizing your monthly spending into fixed costs (like rent) and variable costs (like food and entertainment), you can easily identify areas where you are overspending. Calculating your daily average expense also provides a powerful psychological benchmark to help control impulse purchases.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How to reduce monthly expenses?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Start by auditing your "Other" expenses—cancel unused subscriptions and reduce dining out. For fixed costs, consider negotiating your rent, refinancing loans, or switching to cheaper utility and insurance providers. Small daily savings compound significantly over a month.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What is a good budget split?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The 50/30/20 rule is widely recommended. It suggests spending 50% of your after-tax income on needs (rent, groceries, utilities), 30% on wants (hobbies, dining out, shopping), and dedicating the remaining 20% to savings and debt repayment.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={moneyCalculators.filter((c) =>
          ["Savings Goal Calculator", "Budget Planner", "EMI Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

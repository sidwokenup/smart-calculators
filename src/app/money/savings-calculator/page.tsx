"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { moneyCalculators } from "@/lib/calculators";

export default function SavingsCalculator() {
  const [target, setTarget] = useState<string>("");
  const [monthly, setMonthly] = useState<string>("");

  const calculateSavings = () => {
    const t = parseFloat(target);
    const m = parseFloat(monthly);

    if (!t || !m || t <= 0 || m <= 0) return null;

    // Time (months) = Target Amount / Monthly Savings
    const totalMonths = Math.ceil(t / m);

    // Convert to years and months
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    // Build the formatted string
    let formattedTime = "";
    if (years > 0) {
      formattedTime += `${years} ${years === 1 ? "year" : "years"} `;
    }
    if (remainingMonths > 0) {
      formattedTime += `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
    }
    
    // Handle edge case where it's exactly X years (no remaining months)
    if (formattedTime.trim() === "") {
      formattedTime = "0 months";
    }

    // Extra value: Suggested monthly savings for 1 year
    const oneYearSuggested = Math.round(t / 12);

    return {
      months: totalMonths,
      formattedTime: formattedTime.trim(),
      oneYearSuggested,
    };
  };

  const result = calculateSavings();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Money", href: "/money" },
          { label: "Savings Goal Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Savings Goal Calculator
        </h1>
        <p className="text-base text-gray-600">
          Calculate how long it will take to reach your savings goal
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Target Amount Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="target" className="text-sm font-medium text-gray-700">
              Target Amount (₹)
            </label>
            <input
              type="number"
              id="target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="e.g. 500000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Monthly Savings Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="monthly" className="text-sm font-medium text-gray-700">
              Monthly Savings (₹)
            </label>
            <input
              type="number"
              id="monthly"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
              placeholder="e.g. 15000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Result Display */}
          {result !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                <span className="text-emerald-700 text-sm font-medium mb-2 uppercase tracking-wider">Time Required</span>
                <span className="text-4xl font-bold text-emerald-900 mb-2">
                  {result.months} <span className="text-xl font-medium text-emerald-700">months</span>
                </span>
                <span className="text-lg font-semibold text-emerald-800">
                  {result.formattedTime}
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <span className="text-gray-600 text-sm font-medium mb-1">To reach your goal in 1 year:</span>
                <span className="text-2xl font-bold text-gray-900">
                  ₹{result.oneYearSuggested.toLocaleString('en-IN')} <span className="text-base font-medium text-gray-500">/ month</span>
                </span>
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
            How Savings Goals Work
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Achieving a savings goal is a simple mathematical function of your target amount divided by your monthly savings capacity. Knowing exactly how many months it will take allows you to plan your finances and stay motivated.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center overflow-x-auto">
            <div className="flex items-center text-lg md:text-xl font-medium text-gray-800 whitespace-nowrap">
              <span className="mr-4">Time (months) =</span>
              <div className="flex flex-col items-center">
                <span className="border-b-2 border-gray-800 px-2 pb-1">Target Amount</span>
                <span className="pt-1">Monthly Savings</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How much should I save monthly?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                A popular rule of thumb is the 50/30/20 rule, which suggests allocating 50% of your income to needs, 30% to wants, and 20% to savings and investments. However, the exact amount depends on your personal financial goals and timeline.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What is a realistic savings goal?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                A realistic savings goal is specific, measurable, and achievable within your current income. It's recommended to first build an emergency fund covering 3-6 months of living expenses before saving for larger goals like a car, house down payment, or vacation.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={moneyCalculators.filter((c) =>
          ["Budget Planner", "Monthly Expense Calculator", "Salary to Hourly Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { moneyCalculators } from "@/lib/calculators";

export default function EMICalculator() {
  const [amount, setAmount] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const rYearly = parseFloat(interest);
    const nYears = parseFloat(tenure);

    if (!P || !rYearly || !nYears || P <= 0 || rYearly <= 0 || nYears <= 0) {
      return null;
    }

    const r = rYearly / 12 / 100; // Monthly interest rate
    const n = nYears * 12; // Number of months

    // EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    const factor = Math.pow(1 + r, n);
    const emi = (P * r * factor) / (factor - 1);

    return Math.round(emi);
  };

  const emiValue = calculateEMI();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Money", href: "/money" },
          { label: "EMI Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          EMI Calculator
        </h1>
        <p className="text-base text-gray-600">
          Calculate your monthly loan EMI instantly
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Loan Amount Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-sm font-medium text-gray-700">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              inputMode="numeric"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 500000"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-2 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Interest Rate Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="interest" className="text-sm font-medium text-gray-700">
              Interest Rate (% per year)
            </label>
            <input
              type="number"
              inputMode="numeric"
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="e.g. 8.5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-2 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Loan Tenure Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="tenure" className="text-sm font-medium text-gray-700">
              Loan Tenure (years)
            </label>
            <input
              type="number"
              inputMode="numeric"
              id="tenure"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="e.g. 5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-2 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Result Display */}
          {emiValue !== null ? (
            <div className="mt-4 text-center">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wider">Monthly EMI</span>
                <span className="text-5xl font-bold text-gray-900 mb-1">
                  ₹{emiValue.toLocaleString('en-IN')}
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
            How EMI is Calculated
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Equated Monthly Installment (EMI) is the fixed amount you pay to a bank or lender every month. 
            The formula uses your principal loan amount, monthly interest rate, and total number of months.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center overflow-x-auto">
            <div className="flex items-center text-lg md:text-xl font-medium text-gray-800 whitespace-nowrap">
              <span className="mr-4">EMI =</span>
              <div className="flex flex-col items-center">
                <span className="border-b-2 border-gray-800 px-2 pb-1">P × r × (1 + r)ⁿ</span>
                <span className="pt-1">(1 + r)ⁿ - 1</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            P = Principal amount, r = Monthly interest rate, n = Total number of months
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What affects my EMI?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Your EMI is determined by three main factors: the total loan amount you borrow, 
                the interest rate charged by the lender, and the tenure (duration) of the loan. 
                A higher interest rate or loan amount increases your EMI, while a longer tenure decreases it.
                If you're planning your finances around your income, try our{" "}
                <Link href="/money/salary-hourly" className="text-indigo-600 hover:underline">
                  Salary to Hourly Calculator
                </Link>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How can I reduce my EMI?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                To reduce your EMI, you can negotiate for a lower interest rate, increase the loan tenure 
                (though this means paying more total interest), make a larger down payment to reduce the principal, 
                or make prepayments whenever you have extra funds. Need to plan your monthly budget better? Try our{" "}
                <Link href="/money/budget-planner" className="text-indigo-600 hover:underline">
                  Budget Planner
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={moneyCalculators.filter((c) =>
          ["Savings Goal Calculator", "Budget Planner", "Salary to Hourly Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

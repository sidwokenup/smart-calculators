"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { moneyCalculators } from "@/lib/calculators";

export default function SalaryHourlyCalculator() {
  const [salary, setSalary] = useState<string>("");
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("40");
  const [weeksPerYear, setWeeksPerYear] = useState<string>("52");

  const calculateRates = () => {
    const annualSalary = parseFloat(salary);
    const hours = parseFloat(hoursPerWeek);
    const weeks = parseFloat(weeksPerYear);

    if (!annualSalary || !hours || !weeks || annualSalary <= 0 || hours <= 0 || weeks <= 0) {
      return null;
    }

    const hourlyRate = annualSalary / (hours * weeks);
    const monthlySalary = annualSalary / 12;

    return {
      hourly: Math.round(hourlyRate),
      monthly: Math.round(monthlySalary),
    };
  };

  const rates = calculateRates();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Money", href: "/money" },
          { label: "Salary to Hourly Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Salary to Hourly Calculator
        </h1>
        <p className="text-base text-gray-600">
          Convert your annual salary into hourly wage
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Annual Salary Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="salary" className="text-sm font-medium text-gray-700">
              Annual Salary (₹)
            </label>
            <input
              type="number"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="e.g. 1200000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Hours per week Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="hours" className="text-sm font-medium text-gray-700">
              Hours per week
            </label>
            <input
              type="number"
              id="hours"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              placeholder="e.g. 40"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Weeks per year Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="weeks" className="text-sm font-medium text-gray-700">
              Weeks per year
            </label>
            <input
              type="number"
              id="weeks"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(e.target.value)}
              placeholder="e.g. 52"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Result Display */}
          {rates !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <span className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wider">Hourly Rate</span>
                <span className="text-4xl font-bold text-gray-900 mb-1">
                  ₹{rates.hourly.toLocaleString('en-IN')} <span className="text-lg font-medium text-gray-500">/ hour</span>
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
                <span className="text-indigo-600 text-sm font-medium mb-1 uppercase tracking-wider">Monthly Salary</span>
                <span className="text-2xl font-bold text-indigo-900">
                  ₹{rates.monthly.toLocaleString('en-IN')}
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
            How Salary Conversion Works
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Converting an annual salary to an hourly wage requires knowing how many hours you work in a year. 
            The standard calculation assumes a 40-hour workweek over 52 weeks, which equals 2,080 hours per year.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm grid gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-800">
              <span className="font-medium text-gray-500 mb-2 md:mb-0 w-32">Hourly Rate</span>
              <div className="flex items-center text-lg font-medium">
                <span className="mr-4">=</span>
                <div className="flex flex-col items-center">
                  <span className="border-b-2 border-gray-800 px-2 pb-1 text-center w-full">Annual Salary</span>
                  <span className="pt-1 text-sm">(Hours per week × Weeks per year)</span>
                </div>
              </div>
            </div>
            
            <div className="h-px w-full bg-gray-100 my-2"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-800">
              <span className="font-medium text-gray-500 mb-2 md:mb-0 w-32">Monthly Salary</span>
              <div className="flex items-center text-lg font-medium">
                <span className="mr-4">=</span>
                <div className="flex flex-col items-center">
                  <span className="border-b-2 border-gray-800 px-2 pb-1 text-center w-full">Annual Salary</span>
                  <span className="pt-1">12</span>
                </div>
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
                How many work hours are in a year?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The standard number of work hours in a year is 2,080. This is calculated by multiplying a standard 40-hour workweek by 52 weeks in a year. Some calculations may use 2,000 hours if they account for 2 weeks of unpaid vacation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Is hourly pay better than salary?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                It depends on your work habits and employer policies. Hourly employees are typically eligible for overtime pay (1.5x rate) if they work more than 40 hours a week. Salaried employees usually have a fixed income regardless of hours worked, but often receive better benefits and paid time off.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={moneyCalculators.filter((c) =>
          ["EMI Calculator", "Savings Goal Calculator", "Budget Planner"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

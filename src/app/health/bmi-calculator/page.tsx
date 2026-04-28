"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { healthCalculators } from "@/lib/calculators";

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || h <= 0 || w <= 0) return null;

    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    return parseFloat(bmi.toFixed(1));
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-blue-500", bg: "bg-blue-500", position: Math.min((bmi / 18.5) * 25, 25) };
    if (bmi >= 18.5 && bmi <= 24.9) return { category: "Normal Weight", color: "text-green-500", bg: "bg-green-500", position: 25 + ((bmi - 18.5) / 6.4) * 25 };
    if (bmi >= 25 && bmi <= 29.9) return { category: "Overweight", color: "text-yellow-500", bg: "bg-yellow-500", position: 50 + ((bmi - 25) / 4.9) * 25 };
    return { category: "Obese", color: "text-red-500", bg: "bg-red-500", position: Math.min(75 + ((bmi - 30) / 10) * 25, 100) };
  };

  const bmiValue = calculateBMI();
  const bmiResult = bmiValue ? getBMICategory(bmiValue) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Health", href: "/health" },
          { label: "BMI Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          BMI Calculator
        </h1>
        <p className="text-base text-gray-600">
          Calculate your Body Mass Index instantly
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Weight Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="weight" className="text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              inputMode="numeric"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight (kg)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-2 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Height Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="height" className="text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              inputMode="numeric"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height (cm)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-2 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Result Display */}
          {bmiValue !== null && bmiResult ? (
            <div className="mt-4 text-center">
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-5xl font-bold text-gray-900 mb-1">{bmiValue}</span>
                <span className={`text-2xl font-semibold ${bmiResult.color}`}>
                  {bmiResult.category}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6 relative w-full h-3 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-blue-400 w-1/4"></div>
                <div className="h-full bg-green-400 w-1/4"></div>
                <div className="h-full bg-yellow-400 w-1/4"></div>
                <div className="h-full bg-red-400 w-1/4"></div>
              </div>
              
              {/* Indicator */}
              <div className="relative w-full h-4 mt-1">
                <div 
                  className={`absolute top-0 -ml-2 w-4 h-4 rounded-full border-2 border-white shadow-md ${bmiResult.bg} transition-all duration-500`}
                  style={{ left: `${bmiResult.position}%` }}
                ></div>
              </div>
              
              {/* Labels */}
              <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                <span className="w-1/4 text-center">Under</span>
                <span className="w-1/4 text-center">Normal</span>
                <span className="w-1/4 text-center">Over</span>
                <span className="w-1/4 text-center">Obese</span>
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
            How BMI is Calculated
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Body Mass Index (BMI) is a simple calculation using a person's height and weight. 
            The formula is BMI = kg/m², where kg is a person's weight in kilograms and m² is their height in meters squared.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center">
            <div className="flex items-center text-xl font-medium text-gray-800">
              <span className="mr-4">BMI =</span>
              <div className="flex flex-col items-center">
                <span className="border-b-2 border-gray-800 px-2 pb-1">weight (kg)</span>
                <span className="pt-1">height (m)²</span>
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
                What is a healthy BMI?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                A healthy BMI typically falls between 18.5 and 24.9. Values below 18.5 are considered underweight, 
                while values of 25 to 29.9 are considered overweight, and 30 or above is considered obese.
                To better understand your daily energy needs, you can check out our{" "}
                <Link href="/health/calorie-calculator" className="text-indigo-600 hover:underline">
                  Calorie Needs Calculator
                </Link>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Is BMI accurate?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                While BMI is a useful general screening tool, it does not directly measure body fat. 
                It may not be accurate for athletes with high muscle mass, pregnant women, or older adults.
                If you're curious about your optimal weight range, try our{" "}
                <Link href="/health/ideal-weight" className="text-indigo-600 hover:underline">
                  Ideal Weight Calculator
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={healthCalculators.filter((c) =>
          ["Calorie Needs Calculator", "Ideal Weight Calculator", "Water Intake Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

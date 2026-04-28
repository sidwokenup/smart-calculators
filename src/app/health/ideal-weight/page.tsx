"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { healthCalculators } from "@/lib/calculators";

export default function IdealWeightCalculator() {
  const [gender, setGender] = useState<string>("male");
  const [height, setHeight] = useState<string>("");

  const calculateIdealWeight = () => {
    const h = parseFloat(height);

    if (!h || h <= 0) return null;

    // Convert height to inches
    const heightInInches = h / 2.54;

    // Base calculation (Devine Formula)
    // Male: 50 + 2.3 * (height_in_inches - 60)
    // Female: 45.5 + 2.3 * (height_in_inches - 60)
    
    // For people under 5 feet (60 inches), we adjust the formula so it doesn't break
    const heightOver60 = Math.max(0, heightInInches - 60);
    
    let idealWeight = 0;
    if (gender === "male") {
      idealWeight = 50 + 2.3 * heightOver60;
    } else {
      idealWeight = 45.5 + 2.3 * heightOver60;
    }

    // Apply +- 10% range
    const minWeight = idealWeight * 0.9;
    const maxWeight = idealWeight * 1.1;

    return {
      ideal: Math.round(idealWeight),
      min: Math.round(minWeight),
      max: Math.round(maxWeight),
    };
  };

  const result = calculateIdealWeight();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Health", href: "/health" },
          { label: "Ideal Weight Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Ideal Weight Calculator
        </h1>
        <p className="text-base text-gray-600">
          Estimate your ideal body weight based on height
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Gender Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Height Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="height" className="text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 175"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Result Display */}
          {result !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
                <span className="text-indigo-700 text-sm font-medium mb-2 uppercase tracking-wider">Ideal Weight</span>
                <span className="text-5xl font-bold text-indigo-900 mb-1">
                  {result.ideal} <span className="text-xl font-medium text-indigo-700">kg</span>
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <span className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wider">Healthy Range (±10%)</span>
                <span className="text-2xl font-bold text-gray-900">
                  {result.min} – {result.max} <span className="text-lg font-medium text-gray-600">kg</span>
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
            How Ideal Weight is Calculated
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            This calculator uses the Devine Formula to estimate your ideal body weight. It establishes a base weight for a height of 5 feet (60 inches) and adds a specific amount of weight for every inch above that height. The formula slightly differs between men and women due to natural physiological differences.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-4 text-center">
            <div className="text-gray-800">
              <span className="font-semibold block mb-1">Male:</span>
              <span className="font-medium text-lg">50kg + 2.3kg per inch over 5ft</span>
            </div>
            <div className="h-px w-full bg-gray-100"></div>
            <div className="text-gray-800">
              <span className="font-semibold block mb-1">Female:</span>
              <span className="font-medium text-lg">45.5kg + 2.3kg per inch over 5ft</span>
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
                Is ideal weight accurate?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The "ideal weight" is a mathematical estimate intended for general medical guidance. It is not an absolute rule. Everyone's body is different, and true health is determined by a combination of factors including body fat percentage, muscle mass, and overall fitness, rather than just a number on a scale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Does body type matter?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes, absolutely. The Devine formula does not account for different body frames (small, medium, large) or muscle mass. A heavily muscled athlete might weigh more than their "ideal" weight but still be incredibly healthy. This is why we provide a ±10% healthy range to account for these natural variations in body types.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={healthCalculators.filter((c) =>
          ["BMI Calculator", "Calorie Needs Calculator", "Water Intake Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

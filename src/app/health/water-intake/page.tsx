"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { healthCalculators } from "@/lib/calculators";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [activity, setActivity] = useState<string>("low"); // Options: low, moderate, high

  const calculateWater = () => {
    const w = parseFloat(weight);

    if (!w || w <= 0) return null;

    // Base formula: weight × 0.033
    let waterLiters = w * 0.033;

    // Activity adjustment
    if (activity === "moderate") {
      waterLiters += 0.5;
    } else if (activity === "high") {
      waterLiters += 1.0;
    }

    const roundedLiters = parseFloat(waterLiters.toFixed(1));
    const glasses = Math.round((roundedLiters * 1000) / 250);

    return {
      liters: roundedLiters,
      glasses: glasses,
    };
  };

  const result = calculateWater();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Health", href: "/health" },
          { label: "Water Intake Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Water Intake Calculator
        </h1>
        <p className="text-base text-gray-600">
          Find out how much water you should drink daily
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
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Activity Level Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="activity" className="text-sm font-medium text-gray-700">
              Activity Level
            </label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              <option value="low">Low (Sedentary, office job)</option>
              <option value="moderate">Moderate (Exercise 3-5 days/week)</option>
              <option value="high">High (Heavy exercise 6-7 days/week)</option>
            </select>
          </div>

          {/* Result Display */}
          {result !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
                <span className="text-blue-600 text-sm font-medium mb-2 uppercase tracking-wider">Daily Water Intake</span>
                <span className="text-4xl font-bold text-blue-900 mb-1">
                  {result.liters} <span className="text-xl font-medium text-blue-700">Liters</span>
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-cyan-50 rounded-xl border border-cyan-100 text-center">
                <span className="text-cyan-700 text-sm font-medium mb-1 uppercase tracking-wider">Equivalent to</span>
                <span className="text-2xl font-bold text-cyan-900">
                  ~{result.glasses} <span className="text-lg font-medium text-cyan-800">glasses (250ml)</span>
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
            How Much Water Do You Need?
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Your body weight and activity level heavily dictate your daily hydration needs. As a general rule of thumb, you should drink about 33ml of water per kilogram of body weight. When you exercise or engage in strenuous activities, you lose more water through sweat and breathing, which must be replenished to avoid dehydration.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center overflow-x-auto">
            <div className="flex items-center text-lg md:text-xl font-medium text-gray-800 whitespace-nowrap">
              <span className="mr-4">Water (L) =</span>
              <div className="flex flex-col items-center">
                <span className="px-2">Weight (kg) × 0.033</span>
                <span className="text-sm text-gray-500 mt-2">+ Activity Adjustment (0.5L - 1.0L)</span>
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
                Does activity affect water needs?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes, significantly. Physical activity increases water loss through sweat. It is generally recommended to add an extra 0.5 liters (around 2 glasses) for moderate activity, and up to 1 liter (around 4 glasses) or more for high intensity or prolonged exercise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Can you drink too much water?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes, drinking excessive amounts of water in a short period can lead to a condition called hyponatremia, or water intoxication. This occurs when the sodium levels in your blood become dangerously diluted. It's best to pace your water intake evenly throughout the day.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={healthCalculators.filter((c) =>
          ["BMI Calculator", "Calorie Needs Calculator", "Ideal Weight Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

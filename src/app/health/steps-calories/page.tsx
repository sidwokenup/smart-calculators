"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { healthCalculators } from "@/lib/calculators";

export default function StepsCaloriesCalculator() {
  const [steps, setSteps] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const calculateBurn = () => {
    const s = parseInt(steps, 10);
    const w = parseFloat(weight);

    if (!s || s <= 0) return null;

    let calories = 0;
    if (w && w > 0) {
      // If weight is provided: Calories ≈ Steps × 0.04 × (weight / 70)
      calories = s * 0.04 * (w / 70);
    } else {
      // Simple Formula: Calories ≈ Steps × 0.04
      calories = s * 0.04;
    }

    // Bonus UX: Distance (km) ≈ Steps × 0.0008
    const distanceKm = s * 0.0008;

    return {
      calories: Math.round(calories),
      distance: parseFloat(distanceKm.toFixed(2)),
    };
  };

  const result = calculateBurn();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Health", href: "/health" },
          { label: "Steps to Calories Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Steps to Calories Calculator
        </h1>
        <p className="text-base text-gray-600">
          Estimate calories burned from your daily steps
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Steps Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="steps" className="text-sm font-medium text-gray-700">
              Number of Steps
            </label>
            <input
              type="number"
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="e.g. 10000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Weight Input (Optional) */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="weight" className="text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">Optional</span>
            </div>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 70"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
            <p className="text-xs text-gray-500 mt-1">Providing weight improves accuracy.</p>
          </div>

          {/* Result Display */}
          {result !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-orange-50 rounded-xl border border-orange-100 text-center">
                <span className="text-orange-700 text-sm font-medium mb-2 uppercase tracking-wider">Calories Burned</span>
                <span className="text-5xl font-bold text-orange-900 mb-1">
                  {result.calories.toLocaleString('en-US')} <span className="text-xl font-medium text-orange-700">kcal</span>
                </span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4 bg-teal-50 rounded-xl border border-teal-100 text-center">
                <span className="text-teal-700 text-sm font-medium mb-1 uppercase tracking-wider">Distance Walked</span>
                <span className="text-2xl font-bold text-teal-900">
                  {result.distance.toLocaleString('en-US')} <span className="text-lg font-medium text-teal-700">km</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100 text-center text-gray-500 font-medium">
              Enter steps to see results
            </div>
          )}
        </div>
      </div>

      {/* SEO & FAQs Section */}
      <div className="mt-16 max-w-2xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            How Steps Convert to Calories
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Walking is one of the easiest ways to burn calories. On average, a person burns about 0.04 calories per step. However, the exact number depends heavily on your body weight. A heavier person expends more energy to move, thus burning more calories per step than a lighter person.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center">
            <div className="flex items-center text-lg md:text-xl font-medium text-gray-800 text-center">
              <span className="mr-3">Calories ≈</span>
              <div className="flex flex-col items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                <span>Steps × 0.04</span>
                <span className="text-sm text-gray-500 mt-1 font-normal">Adjusted for weight</span>
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
                How many steps burn 100 calories?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                For an average adult weighing around 70 kg (154 lbs), it takes approximately 2,500 steps to burn 100 calories. This roughly equates to walking 1 mile or 1.6 kilometers at a moderate pace.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Does weight affect calories burned?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Yes, significantly. Caloric expenditure is the energy required to move mass over a distance. Therefore, a person weighing 90 kg will burn more calories walking 10,000 steps than a person weighing 60 kg walking the exact same distance.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={healthCalculators.filter((c) =>
          ["Calorie Needs Calculator", "BMI Calculator", "Ideal Weight Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

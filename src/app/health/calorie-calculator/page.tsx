"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { healthCalculators } from "@/lib/calculators";

export default function CalorieCalculator() {
  const [gender, setGender] = useState<string>("male");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [activity, setActivity] = useState<string>("1.55"); // Default: Moderate

  const calculateCalories = () => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const act = parseFloat(activity);

    if (!a || !w || !h || a <= 0 || w <= 0 || h <= 0) return null;

    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const maintenance = Math.round(bmr * act);

    return {
      maintain: maintenance,
      lose: maintenance - 500,
      gain: maintenance + 500,
    };
  };

  const result = calculateCalories();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Health", href: "/health" },
          { label: "Calorie Needs Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Calorie Needs Calculator
        </h1>
        <p className="text-base text-gray-600">
          Estimate your daily calorie requirements
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
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

            {/* Age Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="text-sm font-medium text-gray-700">
                Age (years)
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 25"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              <option value="1.2">Sedentary (little/no exercise)</option>
              <option value="1.375">Light (1–3 days/week)</option>
              <option value="1.55">Moderate (3–5 days/week)</option>
              <option value="1.725">Active (6–7 days/week)</option>
              <option value="1.9">Very Active (physical job)</option>
            </select>
          </div>

          {/* Result Display */}
          {result !== null ? (
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <span className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wider">Daily Calories (Maintain)</span>
                <span className="text-4xl font-bold text-gray-900 mb-1">
                  {result.maintain.toLocaleString('en-US')} <span className="text-lg font-medium text-gray-500">kcal</span>
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                  <span className="text-blue-600 text-xs font-semibold mb-1 uppercase tracking-wider">Lose Weight</span>
                  <span className="text-xl font-bold text-blue-900">
                    {result.lose.toLocaleString('en-US')} <span className="text-sm font-medium">kcal</span>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
                  <span className="text-orange-600 text-xs font-semibold mb-1 uppercase tracking-wider">Gain Weight</span>
                  <span className="text-xl font-bold text-orange-900">
                    {result.gain.toLocaleString('en-US')} <span className="text-sm font-medium">kcal</span>
                  </span>
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
            How Calorie Needs Are Calculated
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Your daily calorie needs are determined by calculating your Basal Metabolic Rate (BMR) and multiplying it by your activity level. 
            The BMR represents the number of calories your body needs to maintain basic life functions while at rest. We use the Mifflin-St Jeor equation, 
            which is considered one of the most accurate methods for calculating BMR.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How accurate is this calculator?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                This calculator uses the Mifflin-St Jeor equation, which studies have shown to be highly accurate for most adults. However, it provides an estimate. Individual variations in metabolism, muscle mass, and exact daily activity can slightly alter your true calorie needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How to lose weight using calories?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                To lose weight, you need to be in a caloric deficit. This means consuming fewer calories than your body burns. A standard, healthy deficit is 500 calories below your maintenance level, which typically results in about 0.5 kg (1 lb) of weight loss per week.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Related Calculators */}
      <RelatedCalculators
        calculators={healthCalculators.filter((c) =>
          ["BMI Calculator", "Ideal Weight Calculator", "Water Intake Calculator"].includes(
            c.title
          )
        )}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedCalculators from "@/components/RelatedCalculators";
import { healthCalculators } from "@/lib/calculators";

export default function SleepCycleCalculator() {
  const [mode, setMode] = useState<string>("wake"); // "wake" or "bed"
  const [time, setTime] = useState<string>("07:00");

  const calculateSleepTimes = () => {
    if (!time) return null;

    const [hoursStr, minutesStr] = time.split(":");
    const inputDate = new Date();
    inputDate.setHours(parseInt(hoursStr, 10));
    inputDate.setMinutes(parseInt(minutesStr, 10));
    inputDate.setSeconds(0);

    const CYCLE_LENGTH = 90 * 60000; // 90 minutes in ms
    const FALL_ASLEEP_TIME = 15 * 60000; // 15 minutes in ms
    
    const results = [];

    if (mode === "wake") {
      // Calculate backward: Wake time - (90 × cycles) - 15 min
      // Show 4-6 cycles (best is usually 5-6)
      for (let cycles = 6; cycles >= 3; cycles--) {
        const sleepTimeMs = inputDate.getTime() - (CYCLE_LENGTH * cycles) - FALL_ASLEEP_TIME;
        results.push({
          time: new Date(sleepTimeMs),
          cycles: cycles,
        });
      }
    } else {
      // Calculate forward: Bedtime + 15 min + (90 × cycles)
      for (let cycles = 3; cycles <= 6; cycles++) {
        const wakeTimeMs = inputDate.getTime() + FALL_ASLEEP_TIME + (CYCLE_LENGTH * cycles);
        results.push({
          time: new Date(wakeTimeMs),
          cycles: cycles,
        });
      }
    }

    return results.map(r => ({
      ...r,
      formattedTime: r.time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    }));
  };

  const results = calculateSleepTimes();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Health", href: "/health" },
          { label: "Sleep Cycle Calculator" },
        ]}
      />
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold mb-4">
          Sleep Cycle Calculator
        </h1>
        <p className="text-base text-gray-600">
          Find the best time to sleep or wake up
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto border border-gray-100">
        <div className="flex flex-col gap-6">
          {/* Mode Selection */}
          <div className="flex flex-col gap-2">
            <label htmlFor="mode" className="text-sm font-medium text-gray-700">
              Calculation Mode
            </label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            >
              <option value="wake">I want to wake up at</option>
              <option value="bed">I want to go to bed at</option>
            </select>
          </div>

          {/* Time Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="time" className="text-sm font-medium text-gray-700">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
            />
          </div>

          {/* Result Display */}
          {results && results.length > 0 ? (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {mode === "wake" ? "You should try to fall asleep at:" : "You should wake up at:"}
              </h3>
              
              <div className="flex flex-col gap-3">
                {results.map((result, index) => {
                  // Highlight the 5-cycle (7.5 hours) or 6-cycle (9 hours) mark as optimal
                  const isOptimal = result.cycles === 5 || result.cycles === 6;
                  return (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center p-4 rounded-xl border ${
                        isOptimal 
                          ? 'bg-indigo-50 border-indigo-200 shadow-sm' 
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <span className={`text-2xl font-bold ${isOptimal ? 'text-indigo-900' : 'text-gray-800'}`}>
                        {result.formattedTime}
                      </span>
                      <div className="flex flex-col text-right">
                        <span className={`text-sm font-medium ${isOptimal ? 'text-indigo-700' : 'text-gray-600'}`}>
                          {result.cycles} Cycles
                        </span>
                        <span className="text-xs text-gray-500">
                          {result.cycles * 1.5} Hours
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bonus UX Note */}
              <div className="mt-6 text-center bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-800 font-medium flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600">
                    <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                  </svg>
                  Note: Each sleep cycle lasts ~90 minutes.
                </p>
                <p className="text-xs text-blue-600 mt-1">We've factored in 15 minutes to fall asleep.</p>
              </div>
            </div>
          ) : (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100 text-center text-gray-500 font-medium">
              Select a time to see results
            </div>
          )}
        </div>
      </div>

      {/* SEO & FAQs Section */}
      <div className="mt-16 max-w-2xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            How Sleep Cycles Work
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Human sleep is not a uniform state of rest. Instead, it consists of multiple cycles that last approximately 90 minutes each. During these 90 minutes, your brain cycles through several stages of sleep, moving from light sleep to deep sleep, into REM (Rapid Eye Movement) sleep, and back again. Waking up in the middle of a deep sleep phase often leads to grogginess and sleep inertia, while waking up at the end of a cycle leaves you feeling refreshed and alert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Why 90 minutes?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Scientific studies have shown that the average human brain takes about 90 to 110 minutes to complete one full progression through all the stages of non-REM and REM sleep. Structuring your sleep around these 90-minute blocks aligns your wake time with your body's natural biological rhythms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How many cycles are ideal?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Most healthy adults need about 5 to 6 sleep cycles per night to feel fully rested. Five cycles equal 7.5 hours of sleep, while six cycles equal 9 hours. Our calculator highlights these specific cycle marks as optimal targets.
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

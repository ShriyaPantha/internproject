import React, { useState } from "react";
import Layout from "@/components/app/layout";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const plans = [
  { name: "Starter", price: "Free", id: "starter" },
  { name: "Pro", price: "$14.99 / m", best: true, id: "pro" },
  { name: "Bundle", price: "$24.99 / m", id: "bundle" },
  { name: "Industry", price: "$49.99 / m", id: "industry" },
];

const sections = [
  {
    title: "Core Features",
    rows: [
      ["Unlimited leads", [1, 1, 1, 1]],
      ["Unlimited emails", [1, 1, 1, 1]],
      ["No Aurora’s branding", [0, 1, 1, 1]],
    ],
  },
  {
    title: "Advanced Features",
    rows: [
      ["Email automation", [0, 1, 1, 1]],
      ["Custom fields", [0, 1, 1, 1]],
      ["Pro templates", [0, 0, 1, 1]],
      ["Export leads & reports", [0, 0, 1, 1]],
    ],
  },
  {
    title: "Pro Features",
    rows: [
      ["Advanced reporting", [0, 1, 0, 1]],
      ["Priority customer support", [0, 1, 0, 1]],
      ["Custom branding", [0, 1, 0, 1]],
      ["Dedicated account manager", [0, 0, 0, 1]],
    ],
  },
];

const PricingTable = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handlePayment = async (planId: string) => {
    try {
      setLoadingPlan(planId);
      setMessage(null);

      // Make API call to your backend payment endpoint
      const response = await fetch("/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: planId, // Use planId to identify plan/order
          method: "cod",   // You can change this if you want
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Payment failed");

      setMessage(`Payment successful for plan: ${planId}`);
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <MainLayout>
      <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-2">
        {/* PLAN HEADER */}
        <div className="grid grid-cols-5 border-b dark:border-gray-700">
          <div className="p-4 text-sm text-gray-500 dark:text-gray-400">Plans</div>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-4 text-center ${plan.best ? "bg-blue-50 dark:bg-gray-800" : ""}`}
            >
              {plan.best && <div className="text-xs text-orange-500 mb-1">Best value</div>}

              <div className="font-semibold text-gray-900 dark:text-white">{plan.name}</div>
              <div className="text-lg font-bold text-gray-900 dark:text-white mt-1">{plan.price}</div>

              <button
                disabled={loadingPlan === plan.id}
                onClick={() => handlePayment(plan.id)}
                className={`mt-3 w-full py-1.5 rounded-md text-sm font-medium transition ${
                  plan.best
                    ? "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400"
                    : "bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600 disabled:bg-gray-500"
                }`}
              >
                {loadingPlan === plan.id ? "Processing..." : "Pay Now"}
              </button>
            </div>
          ))}
        </div>

        {/* FEATURE SECTIONS */}
        {sections.map((section, sIndex) => (
          <div key={sIndex}>
            <div className="grid grid-cols-5 bg-gray-50 dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <div className="p-3">{section.title}</div>
              <div className="col-span-4" />
            </div>

            {section.rows.map(([label, values]: any, rIndex) => (
              <div key={rIndex} className="grid grid-cols-5 border-t dark:border-gray-700 text-sm">
                <div className="p-3 text-gray-600 dark:text-gray-400">{label}</div>
                {values.map((value: number, cIndex: number) => (
                  <div key={cIndex} className="p-3 text-center">
                    {value ? <span className="text-green-500 font-semibold">✓</span> : <span className="text-gray-400">—</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}

        {/* PAYMENT MESSAGE */}
        {message && (
          <div className="mt-4 p-4 rounded-md text-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
            {message}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default PricingTable;
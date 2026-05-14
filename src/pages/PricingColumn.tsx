import Layout from "@/components/app/layout";
import React, { useState } from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

const PricingColumn = () => {
  const [annual, setAnnual] = useState(false);

  const proPrice = annual ? 12.99 : 14.99;
  const saverPrice = annual ? 19.99 : 24.99;

  return (
    <MainLayout>
      <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 min-h-screen">
        {/* Header */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8 mb-14">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Pricing Options
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-lg">
              Get the power, control and customization you need to manage your
              projects.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:underline text-sm mt-2 inline-block"
            >
              Have questions? Chat with us
            </a>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Monthly
            </span>

            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition ${
                annual ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                  annual ? "translate-x-6" : ""
                }`}
              />
            </button>

            <span className="text-sm text-gray-700 dark:text-gray-300">
              Annual
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Plan
            title="Pricing Starter"
            price="Free"
            features={[
              "Unlimited leads",
              "Unlimited emails",
              "Email automation",
              "Custom fields",
            ]}
            button="Start free trial"
          />

          <Plan
            featured
            badge="Best value"
            title="Pricing Pro"
            price={`$${proPrice}`}
            suffix="/ month"
            features={[
              "Unlimited leads",
              "Unlimited emails",
              "No Aurora’s branding",
              "Email automation",
              "Custom fields",
            ]}
            button="Sign up"
          />

          <Plan
            title="Pricing Saver"
            price={`$${saverPrice}`}
            suffix="/ month"
            features={[
              "Unlimited leads",
              "Unlimited emails",
              "No Aurora’s branding",
              "Email automation",
              "Custom fields",
              "Export leads & reports",
            ]}
            button="Sign up"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default PricingColumn;

/* ---------------- PLAN CARD ---------------- */

function Plan({
  title,
  price,
  suffix,
  features,
  button,
  featured,
  badge,
}: any) {
  return (
    <div
      className={`relative rounded-2xl p-8 text-center border transition
        ${
          featured
            ? "bg-blue-50 dark:bg-gray-800 border-blue-500 scale-105"
            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300">
          {badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
        {price}
        {suffix && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {suffix}
          </span>
        )}
      </div>

      <ul className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
        {features.map((item: string, index: number) => (
          <li key={index} className="flex justify-center gap-2">
            <span className="text-green-500">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full py-2.5 rounded-lg font-medium transition
          ${
            featured
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600"
          }`}
      >
        {button}
      </button>
    </div>
  );
}

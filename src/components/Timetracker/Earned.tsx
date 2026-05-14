import React from "react";

interface EarnedCardProps {
  amount: number;
  percentChange: number;
  weeklyData: number[];
}

const EarnedCard: React.FC<EarnedCardProps> = ({
  amount,
  percentChange,
  weeklyData,
}) => {
  return (
    <div className="
      w-full max-w-sm
      rounded-2xl
      p-5
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-700
      shadow-sm
      transition-colors
    ">
      {/* Header */}
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
        Earned this Week
      </h3>

      {/* Amount */}
      <div className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        ${amount.toLocaleString()}
      </div>

      {/* Percentage Badge */}
      <span
        className={`
          inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium
          ${
            percentChange >= 0
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }
        `}
      >
        {percentChange >= 0 ? "↑" : "↓"} {Math.abs(percentChange)}% since last week
      </span>

      {/* Bar Chart */}
      <div className="mt-4 flex items-end gap-2 h-20">
        {weeklyData.map((val, idx) => (
          <div
            key={idx}
            className="
              flex-1 rounded-md
              bg-blue-500 dark:bg-blue-400
              transition-all
            "
            style={{ height: `${val}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default EarnedCard;

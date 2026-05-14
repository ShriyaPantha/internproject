import React from "react";
import { ThreeDots } from "../ui/threedot";

const WeeklyActivity = () => {
  return (
    <div
      className="
        w-full max-w-sm 
        rounded-xl 
        p-4 sm:p-6
        bg-white dark:bg-gray-900
        transition-colors duration-300
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
          Weekly Activity
        </h3>
        <span className="cursor-pointer text-gray-400 dark:text-gray-500">
          <ThreeDots />
        </span>
      </div>

      {/* Percentage */}
      <div className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
        66.05%
      </div>

      {/* Growth */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span
          className="
            flex items-center gap-1 
            rounded-full
            bg-green-100 dark:bg-green-900/30
            px-2 py-0.5
            text-[10px] sm:text-xs
            font-medium
            text-green-600 dark:text-green-400
          "
        >
          2.54% <span>↗</span>
        </span>

        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
          since last week
        </span>
      </div>

      {/* Wave Chart */}
      <div className="mt-5 sm:mt-6 h-20 sm:h-28 w-full overflow-hidden">
        <svg
          viewBox="0 0 400 120"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Filled Wave */}
          <path
            d="
              M0,70
              C40,50 80,40 120,65
              C160,90 200,35 240,55
              C280,75 320,50 360,60
              L360,120
              L0,120
              Z
            "
            fill="url(#waveGradient)"
          />

          {/* Stroke Wave */}
          <path
            d="
              M0,70
              C40,50 80,40 120,65
              C160,90 200,35 240,55
              C280,75 320,50 360,60
            "
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default WeeklyActivity;

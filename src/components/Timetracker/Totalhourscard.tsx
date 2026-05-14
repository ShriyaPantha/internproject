import React, { useState } from "react";
import { ThreeDots } from "../ui/threedot";

const data = [
  { day: "Sun", value: 40, hours: "6 hrs" },
  { day: "Mon", value: 70, hours: "9 hrs" },
  { day: "Tue", value: 45, hours: "7 hrs" },
  { day: "Wed", value: 65, hours: "8 hrs" },
  { day: "Thu", value: 55, hours: "7.5 hrs" },
  { day: "Fri", value: 35, hours: "5 hrs" },
  { day: "Sat", value: 50, hours: "6.5 hrs" },
];

const Timehours = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="
        w-full max-w-sm p-4 sm:p-6
     dark:bg-gray-900
        transition-colors duration-300
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Total Hours
        </h3>
        <span className="cursor-pointer text-gray-400 dark:text-gray-500">
          <ThreeDots />
        </span>
      </div>

      {/* Time */}
      <div className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
        123:23:01
      </div>

      {/* Percentage */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span
          className="
            flex items-center gap-1 rounded-full
            bg-red-100 dark:bg-red-900/30
            px-2 py-0.5 text-xs font-medium
            text-red-500 dark:text-red-400
          "
        >
          0.73% <span>↘</span>
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          since last week
        </span>
      </div>

      {/* Bar Chart */}
      <div className="mt-6 flex items-end justify-between gap-3 h-24 sm:h-28">
        {data.map((item) => (
          <div
            key={item.day}
            className="relative flex flex-col items-center gap-2"
            onMouseEnter={() => setHovered(item.day)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Tooltip */}
            {hovered === item.day && (
              <div
                className="
                  absolute -top-8
                  rounded-md
                  bg-gray-900 dark:bg-gray-700
                  px-2 py-1 text-xs
                  text-white
                  whitespace-nowrap
                "
              >
                {item.hours}
              </div>
            )}

            {/* Bar */}
            <div
              className="
                relative h-20 sm:h-24 w-3
                rounded-full
                bg-blue-100 dark:bg-blue-900/30
              "
            >
              <div
                className="
                  absolute bottom-0 w-3
                  rounded-full
                  bg-blue-400 dark:bg-blue-500
                  transition-all duration-300
                "
                style={{ height: `${item.value}%` }}
              />
            </div>

            {/* Day */}
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timehours;

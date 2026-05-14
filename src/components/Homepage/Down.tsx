import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { DropdownMenuRadioGroupDemo } from "../ui/lastmonth";

const Down = () => {
  const lineRef = useRef<HTMLCanvasElement | null>(null);
  const lineInstance = useRef<Chart | null>(null);

  const [visible, setVisible] = useState({
    current: true,
    last: true,
  });

  const getLast15Days = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 15; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      dates.push(`${d.toLocaleString("en-US", { month: "short" })} ${d.getDate()}`);
    }
    return dates.reverse();
  };

  const dates = getLast15Days();

  const currentYear = [
    200000, 120000, 160000, 140000, 260000, 160000, 175000, 180000,
    110000, 130000, 80000, 160000, 160000, 150000, 90000,
  ];

  const lastYear = [
    100000, 150000, 95000, 95000, 98000, 140000, 130000, 150000,
    160000, 255000, 140000, 140000, 140000, 160000, 160000,
  ];

  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (lineInstance.current) lineInstance.current.destroy();
    if (!lineRef.current) return;

    const ctx = lineRef.current.getContext("2d")!;

    lineInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            data: currentYear,
            hidden: !visible.current,
            borderColor: "rgba(99, 102, 241, 0.8)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.3,
          },
          {
            data: lastYear,
            hidden: !visible.last,
            borderColor: "rgba(16, 185, 129, 0.8)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: isDark ? "#111827" : "#f9fafb",
            titleColor: isDark ? "#f9fafb" : "#111827",
            bodyColor: isDark ? "#f9fafb" : "#111827",
          },
        },
        scales: {
          x: {
            grid: {
              color: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
            },
            ticks: {
              color: isDark ? "#f9fafb" : "#111827",
              font: { size: 12 },
            },
          },
          y: {
            display: true,
            grid: {
              color: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
            },
            ticks: {
              color: isDark ? "#f9fafb" : "#111827",
            },
          },
        },
      },
    });
  }, [visible, isDark]);

  const toggleLine = (type: "current" | "last") => {
    setVisible((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="px-4 sm:px-6 py-4 w-full lg:w-[880px] pb-6 sm:pb-8 
      bg-white dark:bg-gray-900 rounded-lg">
      <div>
        <div className="text-xl sm:text-2xl font-semibold 
          text-gray-900 dark:text-gray-100">
          Revenue Generated
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-3">
          <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            Amount of revenue in this month comparing to last year
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => toggleLine("current")}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: "rgba(99, 102, 241, 0.8)",
                  opacity: visible.current ? 1 : 0.3,
                }}
              />
              <span
                className="text-xs sm:text-sm text-gray-900 dark:text-gray-100"
                style={{ opacity: visible.current ? 1 : 0.4 }}
              >
                Current Year
              </span>
            </div>

            <div
              className="flex items-center gap-2 cursor-pointer select-none flex-wrap"
              onClick={() => toggleLine("last")}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: "rgba(16, 185, 129, 0.8)",
                  opacity: visible.last ? 1 : 0.3,
                }}
              />
              <span
                className="text-xs sm:text-sm text-gray-900 dark:text-gray-100"
                style={{ opacity: visible.last ? 1 : 0.4 }}
              >
                Last Year
              </span>

              <div className="border rounded-full bg-green-200 dark:bg-green-800 border-green-600 px-2 text-xs text-green-800 dark:text-green-200">
                +6.19%
              </div>

              <DropdownMenuRadioGroupDemo />
            </div>
          </div>
        </div>

        <div className="w-full pt-2 h-56 sm:h-64">
          <canvas ref={lineRef} />
        </div>
      </div>
    </div>
  );
};

export default Down;

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
      dates.push(
        `${d.toLocaleString("en-US", { month: "short" })} ${d.getDate()}`
      );
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
            borderColor: "rgba(0,0,255,0.7)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0,
          },
          {
            data: lastYear,
            hidden: !visible.last,
            borderColor: "rgba(100,150,150,0.7)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: true, color: "rgba(0,0,0,0.1)" },
            ticks: { font: { size: 12 } },
          },
          y: { display: false },
        },
      },
    });
  }, [visible]);

  const toggleLine = (type: "current" | "last") => {
    setVisible((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="px-4 sm:px-6 py-4 w-full lg:w-[880px] pb-6 sm:pb-8">
      <div>
        <div className="text-xl sm:text-2xl font-semibold">
          Revenue Generated
        </div>

        {/* TEXT + LEGENDS */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-3">
          {/* Left Text */}
          <div className="text-gray-600 text-sm sm:text-base">
            Amount of revenue in this month comparing to last year
          </div>

          {/* Right Legend Toggle */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Current Year */}
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => toggleLine("current")}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: "rgba(0,0,255,0.7)",
                  opacity: visible.current ? 1 : 0.3,
                }}
              />
              <span
                className="text-xs sm:text-sm"
                style={{ opacity: visible.current ? 1 : 0.4 }}
              >
                Current Year
              </span>
            </div>

            {/* Last Year */}
            <div
              className="flex items-center gap-2 cursor-pointer select-none flex-wrap"
              onClick={() => toggleLine("last")}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: "rgba(100,150,150,0.7)",
                  opacity: visible.last ? 1 : 0.3,
                }}
              />
              <span
                className="text-xs sm:text-sm"
                style={{ opacity: visible.last ? 1 : 0.4 }}
              >
                Last Year
              </span>

              <div className="border rounded-full bg-green-100 border-green-400 px-2 text-xs">
                +6.19%
              </div>

              <DropdownMenuRadioGroupDemo />
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full pt-2 h-56 sm:h-64">
          <canvas ref={lineRef} />
        </div>
      </div>
    </div>
  );
};

export default Down;

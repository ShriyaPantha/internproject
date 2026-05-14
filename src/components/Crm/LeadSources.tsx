"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRef } from "react";

ChartJS.register(ArcElement, Tooltip);

const LeadSources = () => {
  const chartRef = useRef<any>(null);

  const labels = ["Organic", "Marketing", "Social Media", "Blog Posts"];
  const values = [40, 25, 20, 15];
  const colors = ["#3b82f6", "#f59e0b", "#06b6d4", "#22c55e"];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    maintainAspectRatio: false, // 🔑 responsive
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx: any) => `${ctx.label}: ${ctx.parsed}%`,
        },
      },
    },
  };

  const showTooltip = (index: number) => {
    const chart = chartRef.current;
    if (!chart) return;

    chart.tooltip.setActiveElements(
      [{ datasetIndex: 0, index }],
      { x: 0, y: 0 }
    );
    chart.update();
  };

  const hideTooltip = () => {
    const chart = chartRef.current;
    if (!chart) return;

    chart.tooltip.setActiveElements([], { x: 0, y: 0 });
    chart.update();
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">Lead Sources</h3>

      {/* DONUT */}
      <div className="relative flex justify-center mb-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
          <Doughnut
            ref={chartRef}
            data={data}
            options={options}
          />
        </div>

        {/* CENTER NUMBER */}
        <div className="absolute inset-0 flex items-center justify-center font-semibold text-lg sm:text-xl md:text-2xl pointer-events-none">
          2847
        </div>
      </div>

      {/* LABELS + VALUES */}
      <div className="grid grid-cols-2 gap-y-2 text-xs sm:text-sm">
        {labels.map((label, index) => (
          <div
            key={label}
            className="flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => showTooltip(index)}
            onMouseLeave={hideTooltip}
            onTouchStart={() => showTooltip(index)}
            onTouchEnd={hideTooltip}
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors[index] }}
            />
            <span className="text-gray-600">{label} — {values[index]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadSources;

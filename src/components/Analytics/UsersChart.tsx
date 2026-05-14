import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const UsersChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Actual Value",
        data: [48, 58, 52, 68, 35, 45, 65],
        borderColor: "#3B82F6",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Projected Value",
        data: [60, 75, 62, 78, 55, 70, 80],
        borderColor: "#22C55E",
        borderWidth: 3,
        borderDash: [6, 6],
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // we already made custom legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 300,
        ticks: {
          stepSize: 50, // 🔥 7 horizontal lines (0–300)
        },
        grid: {
          drawBorder: false,
          color: "rgba(0,0,0,0.08)",
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-full flex flex-col">

      {/* LEGEND */}
      <div className="flex justify-end gap-6 text-sm mb-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[3px] bg-blue-500 rounded" />
          <span className="text-gray-600">Actual Value</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-6 h-[3px] bg-green-400 rounded border border-dashed" />
          <span className="text-gray-600">Projected Value</span>
        </div>
      </div>

      {/* CHART */}
      <div className="flex-1 bg-gradient-to-b from-blue-50/40 to-transparent rounded-lg p-4">
        <Line data={data} options={options} />
      </div>

    </div>
  );
};

export default UsersChart;

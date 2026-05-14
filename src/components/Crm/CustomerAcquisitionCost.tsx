"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const CustomerAcquisitionCost = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Allocated",
        data: [50, 45, 55, 50, 60, 40, 45],
        borderColor: "#3b82f6",
        stepped: true,
      },
      {
        label: "Used",
        data: [30, 25, 35, 30, 32, 28, 30],
        borderColor: "#cbd5e1",
        stepped: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // important for responsiveness
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 8,
          boxHeight: 8,
        },
      },
    },
    scales: {
      y: { display: false },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold mb-1">Customer Acquisition Cost</h3>
      <p className="text-sm text-gray-500 mb-3">CAC present vs last week</p>

      {/* Responsive height container */}
      <div className="h-40 sm:h-48 md:h-56 lg:h-64 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomerAcquisitionCost;

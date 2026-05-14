"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const CustomerFeedback = () => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        type: "bar" as const,
        label: "Positive",
        data: [12, 14, 9, 10, 11, 15, 17, 16, 14, 8, 13, 9, 11, 14],
        backgroundColor: "#b7d2ff",
        borderRadius: 6,
        barThickness: 10,
      },
      {
        type: "bar" as const,
        label: "Negative",
        data: [-6, -5, -7, -6, -5, -6, -8, -9, -7, -6, -5, -7, -6, -8],
        backgroundColor: "#e5eef5",
        borderRadius: 6,
        barThickness: 10,
      },
      {
        type: "line" as const,
        label: "75th Percentile",
        data: [8, 9, 6, 5, 7, 9, 8, 9, 10, 6, 7, 5, 6, 8],
        borderColor: "#3b82f6",
        tension: 0.45,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // 🔑 ensures responsiveness
    plugins: { legend: { position: "bottom" as const } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
      <h3 className="font-semibold">Customer Feedback</h3>
      <p className="text-sm text-gray-500 mb-2">
        Number of clients with response
      </p>
      <div className="w-full h-full">
        <Chart data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomerFeedback;

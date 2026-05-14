"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ThreeDots } from "../ui/threedot";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CandidateSources() {
  const sources = [
    { label: "Boards", value: 19444, color: "#9CC3FF" },
    { label: "Referrals", value: 13889, color: "#CFE0FF" },
    { label: "Agency", value: 11111, color: "#FDBA8C" },
    { label: "Socials", value: 25000, color: "#BDE7D6" },
    { label: "Website", value: 16667, color: "#B9E6F3" },
    { label: "Others", value: 13889, color: "#F4B6C2" },
  ];

  const data = {
    labels: sources.map((s) => s.label),
    datasets: [
      {
        data: sources.map((s) => s.value),
        backgroundColor: sources.map((s) => s.color),
        borderWidth: 0,
        borderRadius: 8,
        spacing: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,
    circumference: 180,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="h-full  bg-gray-50 dark:bg-gray-800 p-6 shadow-sm">
      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Candidate Sources
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Applications by source last month
          </p>
        </div>
        <span className="text-gray-400 text-xl"><ThreeDots/></span>
      </div>

      {/* CHART */}
      <div className="relative h-48">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            100,000
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Candidates
          </p>
        </div>
      </div>

      {/* LEGEND → 3 UP / 3 DOWN */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-5 mt-6">
        {sources.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span
              className="h-6 w-1.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {item.value.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

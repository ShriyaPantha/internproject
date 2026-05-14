import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const LeftBottomComponent = () => {
  const data = {
    labels: [
      "Search",
      "Direct",
      "Referral",
      "Unassigned",
      "Social",
      "Newsletter",
    ],
    datasets: [
      {
        data: [110000, 82000, 58000, 42000, 30000, 16000],
        backgroundColor: "#93C5FD",
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6B7280" },
      },
      y: {
        grid: { color: "#E5E7EB" },
        ticks: {
          color: "#9CA3AF",
          callback: (value: number) => `${value / 1000}k`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl  p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Top Campaigns</h3>
          <p className="text-sm text-gray-500">
            Users across different sources
          </p>
        </div>

        <select className="border rounded-md px-3 py-1 text-sm">
          <option>This Week</option>
        </select>
      </div>

      <div className="h-72">
        <Bar data={data} options={options} />
      </div>

      <div className="flex justify-between mt-4 text-sm text-blue-600">
        <span className="cursor-pointer">All Countries →</span>
        <span className="cursor-pointer">See Report ↗</span>
      </div>
    </div>
  );
};

export default LeftBottomComponent;

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LeftTopNew = () => {
  const [selected, setSelected] = useState("Subscribed");
  const [open, setOpen] = useState(false);

  const optionsList = ["Subscribed", "Unsubscribed", "All users"];

  const data = {
    labels: ["iOS", "Android", "iPadOS", "Android (Tab)", "Windows", "Linux", "MacOS", "ChromeOS"],
    datasets: [
      {
        label: "Users by OS",
        data: [8, 2, 14, 6, 35, 21, 9.1, 4.9],
        backgroundColor: [
          "#F6A560", "#F6A560", "#5CD1E5", "#5CD1E5",
          "#6699FF", "#6699FF", "#6699FF", "#6699FF",
        ],
        borderWidth: 0,
        cutout: "65%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-lg">Users by OS</h3>
          <p className="text-sm text-gray-500">
            Categorized by devices and their OS
          </p>
        </div>

        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="border px-2 py-1 text-sm rounded w-32 text-left flex justify-between items-center"
          >
            {selected}
            <span>▼</span>
          </button>

          {open && (
            <ul className="absolute top-full left-0 w-full border bg-white mt-1 rounded shadow-md z-10">
              {optionsList.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-sm mb-4">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-blue-400 rounded-full" /> Desktop
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-orange-400 rounded-full" /> Mobile
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Tablet
        </span>
      </div>

      {/* OS List + Chart */}
      <div className="flex justify-between items-center">
        {/* OS List */}
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <p>iOS</p><p>8%</p>
          <p>Android</p><p>2%</p>
          <p>iPadOS</p><p>14%</p>
          <p>Android</p><p>6%</p>
          <p>Windows</p><p>35%</p>
          <p>Linux</p><p>21%</p>
          <p>MacOS</p><p>9.1%</p>
          <p>ChromeOS</p><p>4.9%</p>
        </div>

        {/* Small Donut chart on right */}
        <div className="w-40 h-40">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LeftTopNew;

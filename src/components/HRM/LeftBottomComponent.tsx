// components/Homepage/LeftBottomComponent.tsx
import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const dataRadar = [
  { dept: "Design", TangibleAssets: 250, GrossSalary: 300, DirectRevenue: 350 },
  { dept: "Marketing", TangibleAssets: 200, GrossSalary: 270, DirectRevenue: 400 },
  { dept: "Accounts", TangibleAssets: 300, GrossSalary: 250, DirectRevenue: 450 },
  { dept: "Logistics", TangibleAssets: 280, GrossSalary: 290, DirectRevenue: 420 },
  { dept: "Management", TangibleAssets: 350, GrossSalary: 310, DirectRevenue: 330 },
  { dept: "Development", TangibleAssets: 400, GrossSalary: 380, DirectRevenue: 360 },
];

const headcountData = [
  { dept: "Design", headcount: 250 },
  { dept: "Marketing", headcount: 295 },
  { dept: "Accounts", headcount: 390 },
  { dept: "Logistics", headcount: 405 },
  { dept: "Management", headcount: 210 },
  { dept: "Development", headcount: 350 },
];

const LeftBottomComponent = () => {
  const [month, setMonth] = useState("January");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">Allocation per Dept</h2>
          <p className="text-gray-500 text-sm">Inter-department comparisons</p>
        </div>

        {/* Month selector */}
        <select
          className="border border-gray-200 rounded px-3 py-1 text-sm"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Radar chart and table side by side */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Radar Chart */}
        <div className="flex-1 min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={dataRadar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="dept" />
              <PolarRadiusAxis />
              <Radar
                name="Tangible Assets"
                dataKey="TangibleAssets"
                stroke="#60a5fa"
                fill="#60a5fa"
                fillOpacity={0.3}
              />
              <Radar
                name="Gross Salary"
                dataKey="GrossSalary"
                stroke="#34d399"
                fill="#34d399"
                fillOpacity={0.3}
              />
              <Radar
                name="Direct Revenue"
                dataKey="DirectRevenue"
                stroke="#fbbf24"
                fill="#fbbf24"
                fillOpacity={0.3}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Headcount Table */}
        <div className="flex-1 max-w-[300px]">
          <div className="bg-gray-100 px-4 py-2 rounded-t-lg font-semibold text-gray-700 flex justify-between">
            <span>Dept</span>
            <span>Headcount</span>
          </div>
          <div className="divide-y divide-gray-100 rounded-b-lg border border-gray-100">
            {headcountData.map((item, index) => (
              <div
                key={item.dept}
                className={`flex justify-between px-4 py-2 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <span>{item.dept}</span>
                <span>{item.headcount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBottomComponent;

import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value: 40 },
  { value: 32 },
  { value: 45 },
  { value: 34 },
  { value: 48 },
  { value: 41 },
  { value: 50 },
  { value: 38 },
  { value: 44 },
];

const LeftBottom: React.FC = () => {
  return (
    <div className="bg-white p-4 ">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Session by OS
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
              ▲ 1.52%
            </span>
            <p className="text-xs text-gray-500">
              more than last week (on average)
            </p>
          </div>
        </div>

        <select className="border text-sm px-2 py-1 rounded-md outline-none">
          <option>Windows</option>
          <option>Linux</option>
          <option>Mac OS</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeftBottom;

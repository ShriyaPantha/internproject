// Avg.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", a: 2, b: 1, c: 0.6 },
  { name: "2", a: 3, b: 2, c: 1 },
  { name: "3", a: 5, b: 3, c: 1.4 },
  { name: "4", a: 7, b: 4, c: 1.8 },
  { name: "5", a: 9, b: 5, c: 2.1 },
  { name: "6", a: 10, b: 6, c: 2.4 },
];

export default function Avg() {
  return (
    <div className="w-full h-80 sm:h-96 md:h-full flex flex-col p-4">
      <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
        Avg. Life Time Value
      </h4>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="a" stroke="#22c55e" strokeWidth={2} />
            <Line dataKey="b" stroke="#f97316" strokeWidth={2} />
            <Line dataKey="c" stroke="#0ea5e9" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

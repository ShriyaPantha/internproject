// Monthly.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "7", users: 3800 },
  { name: "8", users: 5000 },
  { name: "9", users: 5400 },
  { name: "10", users: 6900 },
  { name: "11", users: 5400 },
  { name: "12", users: 4100 },
];

export default function Monthly() {
  return (
    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
      <h4 className="mb-2">Monthly Active Users</h4>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#93c5fd" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// components/Homepage/LeftTop.tsx
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const attendanceData = [
  { name: "ON TIME", value: 24, color: "#22c55e" },
  { name: "DELAYED", value: 12, color: "#f97316" },
  { name: "ABSENT", value: 7, color: "#ef4444" },
  { name: "LEAVE", value: 17, color: "#3b82f6" },
];

const LeftTop = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 11, 29));

  const generateMonthDates = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const dates: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) dates.push(null);
    for (let i = 1; i <= lastDate; i++) dates.push(i);

    return dates;
  };

  const monthDates = generateMonthDates(selectedDate);

  const getDateColor = (day: number | null) => {
    if (!day) return "bg-white";
    if ([3, 7].includes(day)) return "bg-red-100";
    if ([9, 15].includes(day)) return "bg-orange-100";
    if ([11, 22].includes(day)) return "bg-blue-100";
    return "bg-green-100";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold mb-4">Attendance Sheet</h2>

      {/* Chart + Calendar in a straight line */}
      <div className="flex gap-8 items-start">
        {/* Bar Chart */}
        <div className="flex-1 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={attendanceData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value">
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Calendar */}
        <div className="flex-1">
          {/* Calendar Header with User */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-4">
              <button
                className="px-2 py-1 rounded hover:bg-gray-100"
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1)
                  )
                }
              >
                &lt;
              </button>

              <span className="font-semibold">
                {selectedDate.toLocaleString("default", { month: "long" })},{" "}
                {selectedDate.getFullYear()}
              </span>

              <button
                className="px-2 py-1 rounded hover:bg-gray-100"
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)
                  )
                }
              >
                &gt;
              </button>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-6 h-6 rounded-full"
              />
              <select className="border border-gray-200 rounded px-2 py-1 text-sm">
                <option>Iori Utahime</option>
                <option>User 2</option>
                <option>User 3</option>
              </select>
            </div>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
            {daysOfWeek.map((day) => (
              <span key={day} className="font-semibold text-gray-500">
                {day}
              </span>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {monthDates.map((day, index) => (
              <div
                key={index}
                className={`h-8 flex items-center justify-center rounded-full ${
                  day === selectedDate.getDate()
                    ? "bg-blue-500 text-white"
                    : getDateColor(day)
                }`}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftTop;

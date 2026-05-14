import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Dec 26", value: 6800 },
  { date: "Dec 27", value: 8800 },
  { date: "Dec 28", value: 8300 },
  { date: "Dec 29", value: 8900 },
  { date: "Dec 30", value: 5900 },
  { date: "Jan 1", value: 4800 },
  { date: "Jan 3", value: 10400 },
  { date: "Jan 5", value: 5400 },
  { date: "Jan 7", value: 10500 },
  { date: "Jan 9", value: 3900 },
  { date: "Jan 11", value: 8900 },
];

export default function CandidatesChart() {
  return (
    <div className="w-full border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Candidates
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Summary of candidate engagement
          </p>
        </div>

        <select className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={22}>
            {/* Gradient */}
            <defs>
              <linearGradient id="candidateBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.15} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
              className="text-gray-400"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
              className="text-gray-400"
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "#111827",
                borderRadius: 8,
                border: "none",
                fontSize: 12,
              }}
              labelStyle={{ color: "#9ca3af" }}
              itemStyle={{ color: "#ffffff" }}
            />

            <Bar
              dataKey="value"
              fill="url(#candidateBar)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

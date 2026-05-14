import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Storage",
    Bed: 25,
    Table: 20,
    Couch: 30,
    Unoccupied: 25,
  },
];

export default function StorageChart() {
  return (
    <div className="flex flex-col items-start gap-2 p-4 rounded-md shadow-sm w-full
      bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      <BarChart width={500} height={40} data={data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--tooltip-bg)",
            border: "none",
            color: "var(--tooltip-text)",
          }}
          labelStyle={{ color: "var(--tooltip-text)" }}
        />
        <Bar dataKey="Bed" stackId="a" fill="#93b5ff" radius={[10, 10, 10, 10]} />
        <Bar dataKey="Table" stackId="a" fill="#60a5fa" radius={[10, 10, 10, 10]} />
        <Bar dataKey="Couch" stackId="a" fill="#475569" radius={[10, 10, 10, 10]} />
        <Bar dataKey="Unoccupied" stackId="a" fill="#1e40af" radius={[10, 10, 10, 10]} />
      </BarChart>

      {/* Custom Legend */}
      <div className="flex items-center gap-4 mt-2 text-gray-700 dark:text-gray-200 text-sm">
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#93b5ff" }}></span>
          Bed
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#60a5fa" }}></span>
          Table
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#475569" }}></span>
          Couch
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#1e40af" }}></span>
          Unoccupied
        </div>
      </div>

      <style>
        {`
          :root {
            --tooltip-bg: #f9fafb;
            --tooltip-text: #111827;
          }
          .dark {
            --tooltip-bg: #1f2937;
            --tooltip-text: #f9fafb;
          }
        `}
      </style>
    </div>
  );
}

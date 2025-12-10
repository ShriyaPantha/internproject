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
    <div className="flex flex-col items-start gap-2">
      <BarChart width={500} height={20} data={data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />
        <Tooltip />

        <Bar dataKey="Bed" stackId="a" fill="#93b5ff" radius={[10, 10, 10, 10]} />
        <Bar dataKey="Table" stackId="a" fill="#ADD8E6" radius={[10, 10, 10, 10]} />
        <Bar dataKey="Couch" stackId="a" fill="#e5edf3" radius={[10, 10, 10, 10]} />
        <Bar dataKey="Unoccupied" stackId="a" fill="#2d75ff" radius={[10, 10, 10, 10]} />
      </BarChart>

      {/* Custom Legend */}
      <div className="flex items-center gap-4 mt-2 text-sm">
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#93b5ff" }}></span>
          Bed
        </div>

        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#ADD8E6" }}></span>
          Table
        </div>

        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#e5edf3" }}></span>
          Couch
        </div>

        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#2d75ff" }}></span>
          Unoccupied
        </div>
      </div>
    </div>
  );
}

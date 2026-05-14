import { Search, MoreHorizontal, CheckSquare } from "lucide-react";

const pipelineData = [
  {
    role: "Software Engineer",
    dept: "Engineering",
    vacancy: "01",
    manager: "Yaga Masamichi",
    applied: 300,
    reviewed: 150,
    screen: 80,
    interview: 50,
    offer: 20,
    hired: 20,
    rejected: 16,
  },
  {
    role: "Digital Marketing Executive",
    dept: "Marketing",
    vacancy: "02",
    manager: "Inumaki Toge",
    applied: 300,
    reviewed: 150,
    screen: 80,
    interview: 50,
    offer: 20,
    hired: 20,
    rejected: "-",
  },
  {
    role: "QA Engineering",
    dept: "Engineering",
    vacancy: "03",
    manager: "Momo Nishimiya",
    applied: 300,
    reviewed: 150,
    screen: 80,
    interview: "-",
    offer: "-",
    hired: "-",
    rejected: "-",
  },
  {
    role: "Finance Associate",
    dept: "Finance",
    vacancy: "05",
    manager: "Fushiguro Megumi",
    applied: 300,
    reviewed: 150,
    screen: 80,
    interview: "-",
    offer: 20,
    hired: 20,
    rejected: "-",
  },
];

const Pill = ({ value, className }: any) => (
  <div
    className={`min-w-[64px] rounded-lg px-3 py-1 text-center text-xs font-medium ${className}`}
  >
    {value}
  </div>
);

export default function PipelineTable() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Pipeline
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Current status of all hiring pipelines
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs dark:border-gray-700 dark:bg-gray-800">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              placeholder="Search Positions"
              className="w-28 bg-transparent outline-none sm:w-40"
            />
          </div>

          {/* Filter */}
          <select className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs dark:border-gray-700 dark:bg-gray-800">
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* Table wrapper */}
      <div className="relative overflow-x-auto">
        <table className="min-w-[1100px] w-full border-separate border-spacing-y-2 text-xs">
          <thead className="text-gray-500 dark:text-gray-400">
            <tr>
              <th className="px-3 text-left">
                <CheckSquare className="h-4 w-4 text-blue-500" />
              </th>
              <th className="text-left">Job Positions</th>
              <th className="text-center">Vacancy</th>
              <th className="text-center">Hiring Manager</th>
              <th>Applied</th>
              <th>Reviewed</th>
              <th>Mobile Screen</th>
              <th>Interview</th>
              <th>Offer</th>
              <th>Hired</th>
              <th>Rejected</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {pipelineData.map((row, i) => (
              <tr
                key={i}
                className="rounded-xl bg-gray-50 transition hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* Checkbox */}
                <td className="px-3">
                  <input type="checkbox" className="accent-blue-500" />
                </td>

                {/* Job */}
                <td className="py-3">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {row.role}
                  </p>
                  <p className="text-[11px] text-gray-500">{row.dept}</p>
                </td>

                <td className="text-center">{row.vacancy}</td>
                <td className="text-center">{row.manager}</td>

                <td>
                  <Pill value={row.applied} className="bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" />
                </td>
                <td>
                  <Pill value={row.reviewed} className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200" />
                </td>
                <td>
                  <Pill value={row.screen} className="bg-sky-50 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300" />
                </td>
                <td>
                  <Pill value={row.interview} className="bg-blue-100 text-blue-700 dark:bg-blue-800/40 dark:text-blue-300" />
                </td>
                <td>
                  <Pill value={row.offer} className="bg-cyan-50 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300" />
                </td>
                <td>
                  <Pill value={row.hired} className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" />
                </td>
                <td>
                  <Pill value={row.rejected} className="bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300" />
                </td>

                <td className="text-center">
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Showing 1–4 of 14 items</span>
        <button className="text-blue-600 hover:underline">Show all</button>
      </div>
    </div>
  );
}

import React from "react";

const days = [
  "Sat, 3 Jan",
  "Sun, 4 Jan",
  "Mon, 5 Jan",
  "Tue, 6 Jan",
  "Wed, 7 Jan",
  "Thu, 8 Jan",
  "Fri, 9 Jan",
];

const data = [
  {
    project: "Smart Workflow System",
    times: ["06:43:51", "08:06:20", "07:07:38", "08:58:28", "06:49:59", "07:10:39", "07:05:00"],
  },
  {
    project: "ByteVista – Data Analytics Suite",
    times: ["06:09:37", "04:46:35", "08:08:28", "06:30:28", "06:08:20", "07:42:19", "07:00:10"],
  },
  {
    project: "Cloud Integration Hub",
    times: ["05:45:00", "05:58:20", "06:16:40", "06:33:20", "06:51:40", "07:10:00", "07:20:00"],
  },
  {
    project: "Cloud Networking UI",
    times: ["06:05:00", "06:21:40", "06:41:40", "06:58:20", "07:16:40", "07:36:40", "07:50:00"],
  },
];

export default function TimesheetTable() {
  return (
    <div className="mx-auto max-w-2xl w-full px-3 sm:px-4">
      {/* Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-4 sm:p-6 overflow-hidden">

        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-base sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            Timesheet
          </h2>

          <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <button className="hover:text-black dark:hover:text-white">Member ▾</button>
            <button className="hover:text-black dark:hover:text-white">Team ▾</button>
            <button className="hover:text-black dark:hover:text-white">Time Frame ▾</button>
            <button className="hover:text-black dark:hover:text-white">More filters</button>
          </div>
        </div>

        {/* Table – ONLY THIS SCROLLS */}
        <div className="relative -mx-4 sm:-mx-6">
          <div className="overflow-x-auto overscroll-x-contain px-4 sm:px-6">
            <table className="min-w-[720px] sm:min-w-[900px] w-full border-separate border-spacing-y-2">

              <thead>
                <tr className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <th className="sticky left-0 z-20 bg-white dark:bg-zinc-900 px-3 py-2">
                    Project
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="px-3 py-2 whitespace-nowrap"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row, idx) => (
                  <tr
                    key={idx}
                    className="bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
                  >
                    <td className="sticky left-0 z-10 bg-gray-50 dark:bg-zinc-800 px-3 py-3 font-medium text-xs sm:text-sm whitespace-nowrap rounded-l-lg">
                      {row.project}
                    </td>

                    {row.times.map((time, i) => (
                      <td
                        key={i}
                        className="px-3 py-3 text-xs sm:text-sm whitespace-nowrap text-gray-600 dark:text-gray-300"
                      >
                        {time}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

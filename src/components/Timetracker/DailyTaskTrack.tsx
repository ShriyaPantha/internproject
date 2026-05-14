import React from "react";

const tasks = [
  { title: "Fix misalignment in buttons on all screens", start: 9, end: 11.5, color: "bg-blue-200" },
  { title: "Redesign navbar for better usability", start: 12, end: 13.5, color: "bg-green-200" },
  { title: "Develop Initial Prototype 01", start: 14, end: 17, color: "bg-orange-200" },
  { title: "Implement dark mode toggle", start: 16, end: 18, color: "bg-sky-200" },
  { title: "Add animations for interactive UI", start: 17, end: 19, color: "bg-pink-200" },
];

const hours = Array.from({ length: 12 }, (_, i) => i + 9);

export default function DailyTaskTrack() {
  const totalHours = 12; // 9 AM to 9 PM
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
          Daily task track
        </h2>

        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 px-3 py-2 rounded-lg text-sm">
            🔍 <span className="text-gray-500 dark:text-gray-400">Search member</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 px-3 py-2 rounded-lg text-sm">
            📅 <span className="text-gray-500 dark:text-gray-400">09 Jan, 2026</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="overflow-x-auto">
        <div className="relative min-w-[600px] sm:min-w-[800px] md:min-w-[900px]">
          {/* Grid lines */}
          <div className="grid grid-cols-12 absolute inset-0 h-full">
            {hours.map((h) => (
              <div
                key={h}
                className="border-l border-gray-200 dark:border-zinc-700"
              />
            ))}
          </div>

          {/* Tasks */}
          <div className="space-y-4 relative mt-2">
            {tasks.map((task, i) => {
              // Compute width % based on total hours
              const leftPercent = ((task.start - 9) / totalHours) * 100;
              const widthPercent = ((task.end - task.start) / totalHours) * 100;

              return (
                <div key={i} className="relative h-12">
                  <div
                    className={`${task.color} dark:opacity-90 absolute h-12 rounded-xl px-4 flex items-center text-sm text-gray-800 dark:text-gray-900`}
                    style={{
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                    }}
                  >
                    {task.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Time labels */}
          <div className="grid grid-cols-12 mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {hours.map((h) => (
              <div key={h} className="text-center">{h}:00</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

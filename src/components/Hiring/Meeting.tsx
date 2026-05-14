import { useState } from "react";
import { Calendar } from "lucide-react";

const meetings = [
  {
    time: "02:00 pm",
    duration: "45 min",
    type: "Panel Interview",
    title: "Technical Interview with Martin Parr",
  },
  {
    time: "12:00 pm",
    duration: "45 min",
    type: "One-on-One",
    title: "HR Screening with Emily Tran",
  },
  {
    time: "10:00 pm",
    duration: "1 hr",
    type: "Panel Interview",
    title: "Final Round Interview with Jake Oliver",
  },
   {
    time: "10:00 pm",
    duration: "1 hr",
    type: "Panel Interview",
    title: "Final Round Interview with Jake Oliver",
  },

];

export default function Meetings() {
  const [selectedDate, setSelectedDate] = useState("2026-01-11");
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <div className="w-full  border bg-white p-4
                    dark:bg-zinc-900 dark:border-zinc-800">

      {/* HEADER (FIXED) */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Meetings
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All your events at a glance
          </p>
        </div>

        {/* Date Picker */}
        <div className="relative">
          <button
            onClick={() => setOpenCalendar(!openCalendar)}
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2
                       text-sm text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
          >
            {new Date(selectedDate).toDateString()}
            <Calendar size={16} />
          </button>

          {openCalendar && (
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setOpenCalendar(false);
              }}
              className="absolute right-0 top-12 z-10 rounded-lg border bg-white p-2
                         dark:bg-zinc-900 dark:border-zinc-700"
            />
          )}
        </div>
      </div>

      {/* SCROLLABLE CONTENT (Y-AXIS) */}
      <div className="max-h-[280px] overflow-y-auto space-y-3 pr-2 pt-8">

        {/* MEETINGS LIST */}
        {meetings.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl bg-gray-50 p-4
                       dark:bg-zinc-800"
          >
            {/* Time */}
            <div className="w-20 text-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                {item.time}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {item.duration}
              </p>
            </div>

            <div className="h-10 w-px bg-gray-200 dark:bg-zinc-700" />

            {/* Details */}
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.type}
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {item.title}
              </p>
            </div>
          </div>
        ))}

        {/* EXTRA COMPONENT (ADDED AS REQUESTED) */}
       

      </div>
    </div>
  );
}

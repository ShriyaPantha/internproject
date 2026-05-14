import React from "react";
import { MoreHorizontal } from "lucide-react";
import { ThreeDots } from "../ui/threedot";

const hires = [
  {
    name: "Inumaki Toge",
    role: "HR Manager",
    location: "Dhaka",
    date: "01 Jun, 2025",
    color: "bg-blue-500",
  },
  {
    name: "Okkotsu Yuta",
    role: "Software Engineer",
    location: "Seoul",
    date: "02 Jun, 2025",
    color: "bg-green-500",
  },
  {
    name: "Hanami",
    role: "Sales Executive",
    location: "Dubai",
    date: "03 Jun, 2025",
    color: "bg-sky-500",
  },
  {
    name: "Fushiguro Megumi",
    role: "UI/UX Designer",
    location: "Toronto",
    date: "04 Jun, 2025",
    color: "bg-purple-500",
  },
  {
    name: "Todo Aoi",
    role: "QA Analyst",
    location: "London",
    date: "05 Jun, 2025",
    color: "bg-emerald-500",
  },
];

const NewHires = () => {
  return (
    <div className="w-full  border bg-white p-4 sm:p-5
                    dark:bg-zinc-900 dark:border-zinc-800">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            New Hires
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Recent joiners by date, role
          </p>
        </div>
        {/* <MoreHorizontal className="cursor-pointer text-gray-400 dark:text-gray-500" /> */}
        <ThreeDots/>
      </div>

      {/* List */}
      <div className="space-y-4">
        {hires.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border-b pb-3 last:border-none
                       sm:flex-row sm:items-center sm:justify-between
                       border-gray-200 dark:border-zinc-800"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full
                            text-sm font-semibold text-white ${item.color}`}
              >
                {item.name.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.role} · {item.location}
                </p>
              </div>
            </div>

            {/* Right */}
            <p className="text-xs text-gray-400 dark:text-gray-500 sm:text-right">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHires;

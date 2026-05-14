import { MoreVertical } from "lucide-react";

const positions = [
  {
    title: "Customer Support Manager",
    department: "Support",
    location: "New York",
    status: "Active",
  },
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "San Francisco",
    status: "Active",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "London",
    status: "Active",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Chicago",
    status: "Closed",
  },
  {
    title: "Digital Marketing Executive",
    department: "Support",
    location: "New York",
    status: "Active",
  },
];

export default function MyPositions() {
  return (
    <div className="  bg-white p-9 pt-25 shadow-sm  dark:bg-gray-900">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            My Positions
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Recruitment involvement across roles
          </p>
        </div>
        <MoreVertical className="h-5 w-5 text-gray-400" />
      </div>

      {/* Positions list */}
      <div className="space-y-3 max-h-[490 px] overflow-y-auto pr-1">
        {positions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-gray-800"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">
                {item.title}
              </p>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                {item.department} · {item.location}
              </p>

              {/* Avatars */}
              <div className="mt-2 flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500 dark:border-gray-800"
                  />
                ))}
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-xs text-white dark:border-gray-800">
                  +2
                </div>
              </div>
            </div>

            {/* Status */}
            <span
              className={`ml-3 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                item.status === "Active"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                  : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

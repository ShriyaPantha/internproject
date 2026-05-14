import {
  Briefcase,
  UserPlus,
  Eye,
  Users,
  FileText,
  ThumbsUp,
} from "lucide-react";

const stats = [
  { title: "Active Job", value: "2080", icon: Briefcase },
  { title: "Applied", value: "1,000,100", icon: UserPlus },
  { title: "Reviewed", value: "900,200", icon: Eye },
  { title: "Interviewed", value: "800,400", icon: Users },
  { title: "Offered", value: "3,500", icon: FileText },
  { title: "Hired", value: "1,400", icon: ThumbsUp },
];

export default function WelcomeStats() {
  return (
    <div className="space-y-8 p-9">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome, John Carter!
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Have a Productive Day!
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Today is Sunday
          </p>
          <p className="font-medium text-gray-900 dark:text-white">
            11 January, 2026
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 flex justify-between shadow-sm"
            >
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.title}
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">
                  {item.value}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  previous month
                </p>
              </div>

              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

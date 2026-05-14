import React from "react";

interface ProjectsCardProps {
  total: number;
  percentChange: number;
  points: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  total,
  percentChange,
  points,
}) => {
  return (
    <div
      className="
        w-full max-w-sm
        rounded-2xl
        p-5
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
        shadow-sm
        transition-colors
      "
    >
      {/* Header */}
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
        Projects Worked
      </h3>

      {/* Total */}
      <div className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        {total}
      </div>

      {/* Percent Badge */}
      <span
        className={`
          inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium
          ${
            percentChange < 0
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }
        `}
      >
        {percentChange < 0 ? "↑" : "↓"} {Math.abs(percentChange)}% since last week
      </span>

      {/* Line Chart */}
      <div className="mt-4 h-16 w-full">
        <svg
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500 dark:text-blue-400"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectsCard;

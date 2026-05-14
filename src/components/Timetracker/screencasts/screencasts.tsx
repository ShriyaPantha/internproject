import { ThreeDots } from "../../ui/threedot";
import UserRow from "./UserRow";

const Screencasts = () => {
  return (
    <div className="w-full p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
          Screencasts
        </h2>
        <ThreeDots className="text-gray-600 dark:text-gray-300" />
      </div>

      {/* User rows */}
      <div className="mt-6 space-y-6 sm:space-y-8">
        <UserRow
          name="Manami Suda"
          items={[
            { percent: 12 },
            { percent: 48 },
            { percent: 68 },
          ]}
        />

        <UserRow
          name="Okkotsu Yuta"
          items={[
            { percent: 64 },
            { percent: 45 },
            { percent: 10 },
          ]}
        />
      </div>
    </div>
  );
};

export default Screencasts;

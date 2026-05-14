import ScreencastCard from "./Screencastcard";

interface Props {
  name: string;
  items: { percent: number }[];
}

const UserRow = ({ name, items }: Props) => {
  return (
    <div>
      {/* User header */}
      <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-300 dark:bg-gray-700" />
          {/* User name */}
          <span className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">
            {name}
          </span>
        </div>

        {/* View all button */}
        <button className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline">
          View all →
        </button>
      </div>

      {/* Screencasts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <ScreencastCard key={index} percent={item.percent} />
        ))}
      </div>
    </div>
  );
};

export default UserRow;

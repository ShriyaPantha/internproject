interface ScreencastCardProps {
  percent: number;
}

const getBadgeColor = (percent: number) => {
  if (percent >= 60) return "bg-green-500";
  if (percent >= 40) return "bg-orange-400";
  return "bg-red-500";
};

const ScreencastCard = ({ percent }: ScreencastCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Badge */}
      <span
        className={`absolute left-3 top-3 rounded-full px-2 py-0.5 text-xs sm:text-sm font-semibold text-white ${getBadgeColor(
          percent
        )}`}
      >
        {percent}%
      </span>

      {/* Thumbnail */}
      <div className="h-40 sm:h-48 md:h-56 lg:h-64 w-full bg-gradient-to-br from-gray-800 to-gray-700" />
    </div>
  );
};

export default ScreencastCard;

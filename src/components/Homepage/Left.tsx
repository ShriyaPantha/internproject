import { img4 } from "@/constants/image";
import {
  DollarSignIcon,
  Search,
  ShoppingCartIcon,
  LoaderCircle,
} from "lucide-react";

const StatItem = ({
  icon,
  count,
  label,
}: {
  icon: React.ReactNode;
  count: string;
  label: string;
}) => (
  <div className="flex items-center gap-3">
    {icon}
    <span className="text-2xl sm:text-3xl font-bold text-gray-600">
      {count}
    </span>
    <span className="text-xs sm:text-sm font-medium text-gray-500">
      {label}
    </span>
  </div>
);

const StatsSection = () => (
  <div className="space-y-3">
    <StatItem
      icon={
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
      }
      count="2,110"
      label="visitors"
    />

    <StatItem
      icon={
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <DollarSignIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
      }
      count="$8.2M"
      label="Earnings"
    />

    <StatItem
      icon={
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        </div>
      }
      count="1,124"
      label="orders"
    />
  </div>
);

const Left = () => {
  return (
    <div className="bg-gray-50 pt-6 sm:pt-9 px-4 sm:px-9 w-full lg:w-80 border-r">
      {/* Date + Greeting */}
      <div className="border-b pb-4">
        <span className="text-gray-600 text-sm sm:text-md block mb-1">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Good Morning,
          <div>Captain!</div>
        </h2>
      </div>

      {/* Updates Section */}
      <div className="border-b pb-4 mt-5">
        <div className="text-gray-500 text-xs sm:text-sm mb-3">
          Updates from yesterday
        </div>
        <StatsSection />
      </div>

      {/* Orders Section */}
      <div className="mt-5">
        <div className="pb-4 text-gray-600 text-sm sm:text-base font-medium">
          You have 16 orders today.
        </div>

        {/* STRAIGHT LINE SCROLLBAR */}
        <div className="line-scroll overflow-y-auto max-h-[300px] sm:max-h-[420px] pr-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-100 rounded-md mb-2 p-2"
            >
              <div className="w-14 h-10 flex-shrink-0">
                <img
                  src={img4}
                  alt="Sofa"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-gray-800 text-sm font-semibold truncate">
                  Advanced Soft...
                </span>
                <span className="text-gray-600 text-xs mt-1">$427</span>
              </div>

              <div className="w-7 h-7 flex items-center justify-center border border-red-200 rounded-full bg-white">
                <LoaderCircle className="w-3 h-3 text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Left;

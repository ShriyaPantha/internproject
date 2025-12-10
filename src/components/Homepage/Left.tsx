import { img4 } from "@/constants/image";
import { DollarSignIcon, Search, ShoppingCartIcon, LoaderCircle } from "lucide-react";

const StatItem = ({
  icon,
  count,
  label,
}: {
  icon: React.ReactNode;
  count: string;
  label: string;
}) => (
  <div className="flex items-center gap-3 ">
    {icon}
    <span className="text-3xl font-bold text-gray-600">{count}</span>
    <span className="text-sm font-medium text-gray-500">{label}</span>
  </div>
);

const StatsSection = () => (
  <div className="space-y-3">
    <StatItem
      icon={
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <Search className="w-5 h-5 text-blue-600" />
        </div>
      }
      count="2,110"
      label="visitors"
    />

    <StatItem
      icon={
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <DollarSignIcon className="w-5 h-5 text-blue-600" />
        </div>
      }
      count="$8.2M"
      label="Earnings"
    />

    <StatItem
      icon={
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <ShoppingCartIcon className="w-5 h-5 text-blue-600" />
        </div>
      }
      count="1,124"
      label="orders"
    />
  </div>
);

const Left = () => {
  return (
    <div className="bg-gray-50 pt-9 px-9  w-80 border-r-1">
      {/* Date + Greeting */}
      <div className="border-b pb-4">
        <span className="text-gray-600 text-md block mb-1 ">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
          Good Morning,
          <div>Captain!</div>
        </h2>
      </div>

      {/* Updates Section */}
      <div className="border-b pb-4 mt-5">
        <div className="text-gray-500 text-sm mb-3 tracking-wide">
          Updates from yesterday
        </div>
        <StatsSection />
      </div>

      {/* Orders Section */}
      <div className="mt-5">
        <div className="pb-4 text-gray-600 font-medium">
          You have 16 orders today.
        </div>

        {/* SCROLLABLE ORDER LIST */}
        <div className="overflow-y-auto max-h-[420px] pr-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-100  gap-3 rounded-md mb-2"
            >
              {/* Image */}
              <div className="w-15 h-10 flex-shrink-0">
                <img
                  src={img4}
                  alt="Sofa"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <span className="text-gray-800 font-semibold">
                  Advanced Soft...
                </span>
                <span className="text-gray-600 mt-1">$427</span>
              </div>

              {/* Loader Icon */}
              <div className="flex items-center justify-center w-7 h-7 border-2 border-red-200 rounded-full bg-white hover:bg-red-50 transition-colors">
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

import { TrendingDown } from "lucide-react";

const BounceRate = () => {
  return (
    <div className="p-6 ">
      <h3 className="font-semibold mb-4">Bounce Rate</h3>

      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
          <TrendingDown />
        </div>
        <span className="text-2xl font-semibold">62.11%</span>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        See page-wise <span className="text-blue-600">Performance</span>
      </p>
    </div>
  );
};

export default BounceRate;

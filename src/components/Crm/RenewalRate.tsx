import { RefreshCcw } from "lucide-react";

const RenewalRate = () => {
  return (
    <div className="h-full px-4 sm:px-12 py-4 sm:py-12 flex flex-col justify-center items-center sm:items-start">
      <h4 className="text-lg font-semibold">Renewal Rate</h4>
      <RefreshCcw className="text-green-500 mb-3 mt-3" size={32} />
      <p className="text-2xl font-bold">37%</p>
      <p className="text-xs text-gray-400 mt-2">Premium accounts</p>
    </div>
  );
};

export default RenewalRate;

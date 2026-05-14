import { Truck } from "lucide-react";

const Delivered = () => {
  return (
    <div className="h-full px-4 sm:px-12 py-4 sm:py-12 flex flex-col justify-center items-center sm:items-start">
      <h4 className="text-lg font-semibold">Delivered</h4>
      <Truck className="text-cyan-500 mb-3 mt-3" size={32} />
      <p className="text-2xl font-bold">1,920</p>
      <p className="text-xs text-gray-400 mt-2">Unit products</p>
    </div>
  );
};

export default Delivered;

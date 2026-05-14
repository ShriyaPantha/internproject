import { Warehouse } from "lucide-react";

const Inventory = () => {
  return (
    <div className="h-full px-4 sm:px-12 py-4 sm:py-12 flex flex-col justify-center items-center sm:items-start">
      <h4 className="text-lg font-semibold">Inventory</h4>
      <Warehouse className="text-purple-500 mb-3 mt-3" size={32} />
      <p className="text-2xl font-bold">13,200</p>
      <p className="text-xs text-gray-400 mt-2">Units in stock</p>
    </div>
  );
};

export default Inventory;

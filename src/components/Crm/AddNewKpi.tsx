import { Plus } from "lucide-react";

const AddNewKPI = () => {
  return (
    <div className="h-full px-12 py-12 flex flex-col justify-center items-center sm:items-start">
      <h4 className="text-lg font-semibold">New KPI</h4>
      <Plus className="text-blue-500 mb-3 mt-3" size={32} />
      <p className="text-sm font-medium text-blue-600 mt-2">
        Add New KPI
      </p>
    </div>
  );
};

export default AddNewKPI;

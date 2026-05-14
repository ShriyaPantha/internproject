import { CheckCircle } from "lucide-react";

const Conversion = () => {
  return (
    <div className="p-6">
      <h3 className="font-semibold mb-4">Conversion</h3>

      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-green-100 text-green-600">
          <CheckCircle />
        </div>
        <span className="text-2xl font-semibold">21.91%</span>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        See last week’s <span className="text-blue-600">Top Products</span>
      </p>
    </div>
  );
};

export default Conversion;

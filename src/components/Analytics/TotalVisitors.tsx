import { Users } from "lucide-react";

const TotalVisitors = () => {
  return (
    <div className="p-6 ">
      <h3 className="font-semibold mb-4">Total Visitors</h3>

      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
          <Users />
        </div>
        <span className="text-2xl font-semibold">5.9M</span>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        See in-depth <span className="text-blue-600">Traffic sources</span>
      </p>
    </div>
  );
};

export default TotalVisitors;

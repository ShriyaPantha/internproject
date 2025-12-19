import { FolderIcon } from "lucide-react";
import React from "react";

const Second = () => {
  return (
    <div>
      <div className="flex justify-between">
        
        {/* Professional Folder Icon */}
        <div className="bg-green-50 rounded-md text-green-600 p-3">
          <FolderIcon className="w-5 h-5 stroke-[1.5]" />
        </div>

        <div>
          <div className="px-5 pb-2 font-semibold flex-col">
            Completed:24
          </div>

          <div className="text-sm">
            <span className="rounded-2xl mr-2 px-3 py-0.5 bg-green-100 text-green-700  border-gray-300 text-xs font-medium mx-4">
              5 More
            </span>
            than last week
          </div>
        </div>

      </div>
    </div>
  );
};

export default Second;

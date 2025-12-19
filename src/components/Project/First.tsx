import { FolderIcon } from "lucide-react";
import React from "react";

const First = () => {
  return (
    <div>
      <div className="flex justify-between">
        
        {/* Professional Folder Icon */}
        <div className="bg-blue-50 rounded-md text-blue-600 p-3">
          <FolderIcon className="w-5 h-5 stroke-[1.5]" />
        </div>

        <div>
          <div className="px-5 pb-2 font-semibold flex-col">
            Running:7
          </div>

          <div className="text-sm">
            <span className="rounded-2xl mr-2 px-3 py-0.5 bg-gray-100 text-gray-700  border-gray-300 text-xs font-medium mx-4">
              2 less
            </span>
            than last month
          </div>
        </div>

      </div>
    </div>
  );
};

export default First;

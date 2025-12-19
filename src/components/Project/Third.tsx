import { FolderIcon } from "lucide-react";
import React from "react";

const Third = () => {
  return (
    <div>
      <div className="flex justify-between">
        
        {/* Professional Folder Icon */}
        <div className="bg-orange-50 rounded-md text-orange-600 p-3">
          <FolderIcon className="w-5 h-5 stroke-[1.5]" />
        </div>

        <div>
          <div className="px-5 pb-2 font-semibold flex-col">
            Due Soon: 23
          </div>

          <div className="text-sm  px-5  ">
            
            Deadline: 03 Mar
          </div>
        </div>

      </div>
    </div>
  );
};

export default Third;

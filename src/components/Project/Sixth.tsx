import React from "react";
import RoadmapTable from "./RoadmapTable";

const Sixth = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* Table scroll wrapper */}
      <div className="w-full overflow-x-auto">
        <RoadmapTable />
      </div>

    </div>
  );
};

export default Sixth;

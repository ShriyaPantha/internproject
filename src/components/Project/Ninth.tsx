import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Ninth = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col w-full max-w-md sm:max-w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 px-2">
        <h3 className="font-semibold text-sm sm:text-base">+ Add Schedule</h3>
        <span className="text-sm text-gray-500">May, 2025</span>
      </div>

      {/* Calendar */}
      <div className="flex-1 rounded-lg border p-2 overflow-auto">
        <Calendar
          onChange={setValue}
          value={value}
          className="w-full h-auto sm:h-[420px] border-none text-sm sm:text-base"
        />
      </div>
    </div>
  );
};

export default Ninth;

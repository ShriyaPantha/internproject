import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Ninth = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <div className="h-[420px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">+ Add Schedule</h3>
        <span className="text-sm text-gray-500">May, 2025</span>
      </div>

      {/* Calendar */}
      <div className="flex-1 rounded-lg border p-2">
        <Calendar
          onChange={setValue}
          value={value}
          className="w-full border-none"
        />
      </div>
    </div>
  );
};

export default Ninth;

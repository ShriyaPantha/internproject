import React from "react";
import { Calendar as CalendarIcon, TrendingUp, TrendingDown, X } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CrmFirst = () => {
  const [date, setDate] = React.useState({
    from: new Date(2025, 11, 16),
    to: new Date(2025, 11, 23),
  });

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 py-4 bg-white border-b">

      {/* LEFT */}
      <div className="pr-0 lg:pr-8 border-r lg:border-r border-gray-200 w-full lg:w-auto mb-4 lg:mb-0">
        <h1 className="text-2xl font-semibold">
          Good Evening, Captain!
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          See what's happening in real-time
        </p>
      </div>

      {/* CENTER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 w-full lg:w-auto mb-4 lg:mb-0">

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-blue-100 text-blue-600">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">310</span>
              <span className="text-sm text-gray-500">Deals created</span>
            </div>
            <div className="text-sm text-green-600 flex items-center gap-1">
              4.3% <TrendingUp size={14} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-blue-100 text-blue-600">
            <TrendingDown size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">26</span>
              <span className="text-sm text-gray-500">Deals closed</span>
            </div>
            <div className="text-sm text-orange-500 flex items-center gap-1">
              1.9% <TrendingDown size={14} />
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT – DATE PICKER */}
      <div className="w-full lg:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              className="flex items-center gap-2 w-full lg:w-auto justify-between"
            >
              <CalendarIcon size={18} />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "dd MMM, yy")} -{" "}
                    {format(date.to, "dd MMM, yy")}
                  </>
                ) : (
                  format(date.from, "dd MMM, yy")
                )
              ) : (
                <span>Pick a date</span>
              )}
              <X size={14} />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-full sm:w-auto p-0" align="end">
            <Calendar
              mode="range"
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
            />
          </PopoverContent>
        </Popover>
      </div>

    </div>
  );
};

export default CrmFirst;

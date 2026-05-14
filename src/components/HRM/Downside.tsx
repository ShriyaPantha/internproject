import React from "react";

const Down: React.FC = () => {
  return (
    <div className="w-full border rounded-lg bg-white overflow-hidden text-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* LEFT SECTION */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-r">

          {/* Total Headcount */}
          <div className="p-4 border-b sm:border-r">
            <h2 className="text-2xl font-semibold">1,053</h2>
            <p className="text-xs text-gray-600">Total Headcount</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                -0.73%
              </span>
              <span className="text-[10px] text-gray-500">
                Since last year
              </span>
            </div>
          </div>

          {/* Open Positions */}
          <div className="p-4 border-b">
            <h2 className="text-2xl font-semibold">46</h2>
            <p className="text-xs text-gray-600">Open Positions</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                0.0%
              </span>
              <span className="text-[10px] text-gray-500">
                Since last year
              </span>
            </div>
          </div>

          {/* Successful Hiring */}
          <div className="p-4 sm:border-r">
            <h2 className="text-2xl font-semibold">87%</h2>
            <p className="text-xs text-gray-600">Successful Hiring</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-600">
                2.54%
              </span>
              <span className="text-[10px] text-gray-500">
                Since last year
              </span>
            </div>
          </div>

          {/* Due for Payraise */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold">15</h2>
            <p className="text-xs text-gray-600">Due for Payraise</p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-600">
                4.6%
              </span>
              <span className="text-[10px] text-gray-500">
                Since last year
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-4 p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-base">Leaves Left</h3>

            <div className="flex items-center gap-3">
              <button className="text-xs text-blue-600 hover:underline">
                History
              </button>
              <button className="px-3 py-0.5 text-xs bg-blue-600 text-white rounded-md">
                Apply
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 min-w-[260px]">

            {[
              { title: "Casual", days: 6, left: "5 days left" },
              { title: "Medical", days: 5, left: "2 days left" },
              { title: "In Lieu", days: 4, left: "1 day left" },
              { title: "Others", days: 7, left: "3 days left" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-md p-3"
              >
                <p className="text-xs font-medium">{item.title}</p>
                <p className="text-lg font-semibold mt-1">
                  {item.days}{" "}
                  <span className="text-xs font-normal">days</span>
                </p>
                <p className="text-[10px] text-gray-500">{item.left}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Down;

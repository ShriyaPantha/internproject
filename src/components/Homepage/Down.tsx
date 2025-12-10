import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { DropdownMenuRadioGroupDemo } from "../ui/lastmonth";
import Last from "../last/Last";



const Down = () => {
  const lineRef = useRef(null);
  const lineInstance = useRef(null);

  const [visible, setVisible] = useState({
    current: true,
    last: true,
  });

  const getLast15Days = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 15; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);

      const day = d.getDate();
      const month = d.toLocaleString("en-US", { month: "short" });

      dates.push(`${month} ${day}`);
    }

    return dates.reverse();
  };

  const dates = getLast15Days();

  const currentYear = [
    200000, 120000, 160000, 140000, 260000, 160000, 175000, 180000,
    110000, 130000, 80000, 160000, 160000, 150000, 90000,
  ];

  const lastYear = [
    100000, 150000, 95000, 95000, 98000, 140000, 130000, 150000,
    160000, 255000, 140000, 140000, 140000, 160000, 160000,
  ];

  useEffect(() => {
    if (lineInstance.current) lineInstance.current.destroy();

    const ctx = lineRef.current.getContext("2d");

    lineInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Current Year",
            data: currentYear,
            hidden: !visible.current,
            borderColor: "rgba(0,0,255,0.7)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0,
          },
          {
            label: "Last Year",
            data: lastYear,
            hidden: !visible.last,
            borderColor: "rgba(100,150,150,0.7)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }, // We use our custom legend
        },
        scales: {
          x: {
            grid: { display: true, color: "rgba(0,0,0,0.1)" },
            ticks: { font: { size: 15 } },
          },
          y: {
            display: false,
            grid: { display: false },
          },
        },
      },
    });
  }, [visible]);

  // Toggle handler
  const toggleLine = (type) => {
    setVisible((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="px-4 py-4 w-220  pb-8">
      <div>
        <div className="text-2xl font-semibold">Revenue Generated</div>

        {/* ⭐ TEXT + TOGGLE LEGENDS IN ONE ROW */}
        <div className="flex justify-between items-center mb-3">
          {/* Left Text */}
          <div className="text-gray-600">
            Amount of revenue in this month comparing to last year
          </div>

          {/* Right Legend Toggle */}
          <div className="flex items-center gap-6">

            {/* Current Year */}
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => toggleLine("current")}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: "rgba(0,0,255,0.7)",
                  opacity: visible.current ? 1 : 0.3,
                }}
              ></span>
              <span
                className="text-sm"
                style={{ opacity: visible.current ? 1 : 0.4 }}
              >
                Current Year
              </span>
            </div>

            {/* Last Year */}
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => toggleLine("last")}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: "rgba(100,150,150,0.7)",
                  opacity: visible.last ? 1 : 0.3,
                }}
              ></span>
              <span
                className="text-sm"
                style={{ opacity: visible.last ? 1 : 0.4 }}
              >
                Last Year
              </span>
              <div className="border rounded-full bg-green-100 border-green-400">
                +6.19%
              </div>
              <div className=" ">
             <DropdownMenuRadioGroupDemo />
              </div>
                
              
    
            
            </div>
          </div>
        </div>

        <div className="w-210 pt-2 h-64">
          <canvas ref={lineRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Down;

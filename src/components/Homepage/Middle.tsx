import { useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import Chart from "chart.js/auto";
import { ThreeDots } from "../ui/threedot";

const Middle = () => {
  const lineRef = useRef(null);
  const lineInstance = useRef(null);

  const barRef = useRef(null);
  const barInstance = useRef(null);

  // ⭐ November dates for tooltip
  const dates = ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6"];

  // ---------------- LINE CHART ----------------
  useEffect(() => {
    if (lineInstance.current) lineInstance.current.destroy();

    const ctx = lineRef.current.getContext("2d");

    const currentYear = [0, 400, 250, 300, 80, 600];
    const lastYear = [100, 250, 150, 200, 400, 250];

    lineInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Current Year",
            data: currentYear,
            borderColor: "rgba(0,0,255,0.7)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0,
          },
          {
            label: "Last Year",
            data: lastYear,
            borderColor: "rgba(100,150,150,0.4)",
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
          legend: { display: false },

          // ⭐ Tooltip showing BOTH values together
          tooltip: {
            enabled: true,
            callbacks: {
              title: (context) => dates[context[0].dataIndex],

              label: (context) => {
                const index = context.dataIndex;
                const current = context.chart.data.datasets[0].data[index];
                const last = context.chart.data.datasets[1].data[index];

                if (context.datasetIndex === 0) {
                  return [
                    `Current Year: ${current}`,
                    `Last Year: ${last}`,
                  ];
                }

                return null; // Hide duplicate tooltip for second dataset
              },
            },
          },
        },

        scales: {
          y: { display: false },
          x: { display: false },
        },
      },
    });
  }, []);

  // ---------------- BAR CHART ----------------
  useEffect(() => {
    if (barInstance.current) barInstance.current.destroy();

    const ctx = barRef.current.getContext("2d");

    const currentYear = [600, 300, 250, 300, 80, 600];
    const lastYear = [500, 250, 150, 200, 400, 250];

    barInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Current Year",
            data: currentYear,
            backgroundColor: "rgba(0,0,255,0.5)",
            tension: 1,
          },
          {
            label: "Last Year",
            data: lastYear,
            backgroundColor: "rgba(100,150,150,0.3)",
            tension: 1,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: { display: false },

          // ⭐ Tooltip showing BOTH values together
          tooltip: {
            enabled: true,
            callbacks: {
              title: (context) => dates[context[0].dataIndex],

              label: (context) => {
                const index = context.dataIndex;
                const current = context.chart.data.datasets[0].data[index];
                const last = context.chart.data.datasets[1].data[index];

                if (context.datasetIndex === 0) {
                  return [
                    `Current Year: ${current}`,
                    `Last Year: ${last}`,
                  ];
                }

                return null; // Hide duplicate bar tooltip
              },
            },
          },
        },

        scales: {
          y: { display: false },
          x: { display: false },
        },
      },
    });
  }, []);
 
return (
 <div className="bg-white border-r border-b w-90 p-0">

  {/* ---------- Monthly Earnings ---------- */}
  <div className="border-b py-9 m-0">
    <div className="flex justify-between items-start ">
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-800 pb-1">
          Monthly Earnings
        </h2>
        <p className="text-gray-500 text-sm mb-3 pr-3">
          Total profit gained
        </p>
      </div>
      <ThreeDots />
    </div>

    {/* Remove gap between left content and chart */}
    <div className="flex items-center gap-0 p-0 m-0">
      <div>
        <div className="text-3xl font-bold text-gray-700 pt-3 pr-2 pb-3">
          $25,049
        </div>
        <div className="text-gray-500 text-sm flex gap-2 items-center mt-2">
          <span className="rounded-full bg-green-100 border border-green-200 px-2 text-green-800 text-xs">
            +4.33%
          </span>
          <span className=" pr-8">vs last month</span>
        </div>
      </div>

      <div className="w-28 h-16">
        <canvas ref={lineRef}></canvas>
      </div>
    </div>
  </div>

  {/* ---------- Visitor Value ---------- */}
  <div className="px-4 py-9 m-0 border-b">
    <div className="flex justify-between items-start p-0 m-0">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 pb-1">
          Visitor Value
        </h2>
        <p className="text-gray-500 text-sm mb-3">
          Avg. income per site visit
        </p>
      </div>
      <ThreeDots />
    </div>

    {/* Remove gap between left content and chart */}
    <div className="flex items-center gap-0 p-0 m-0">
      <div>
        <div className="text-3xl font-bold text-gray-700 pt-5 pb-3">
          $63.02
        </div>
        <div className="text-gray-500 text-sm flex gap-2 items-center mt-2">
          <span className="rounded-full bg-red-100 border border-red-200 px-2 text-red-800 text-xs ">
            -1.03%
          </span>
          <span className="pr-8">vs last month</span>
        </div>
      </div>

      <div className="w-28 h-16">
        <canvas ref={barRef}></canvas>
      </div>
    </div>
  </div>
</div>

);
}

export default Middle;

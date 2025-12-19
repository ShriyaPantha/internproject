import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ThreeDots } from "../ui/threedot";

const Middle = () => {
  const lineRef = useRef<HTMLCanvasElement | null>(null);
  const lineInstance = useRef<Chart | null>(null);

  const barRef = useRef<HTMLCanvasElement | null>(null);
  const barInstance = useRef<Chart | null>(null);

  const dates = ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6"];

  // ---------------- LINE CHART ----------------
  useEffect(() => {
    if (lineInstance.current) lineInstance.current.destroy();
    if (!lineRef.current) return;

    const ctx = lineRef.current.getContext("2d")!;

    lineInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            data: [0, 400, 250, 300, 80, 600],
            borderColor: "rgba(0,0,255,0.7)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0,
          },
          {
            data: [100, 250, 150, 200, 400, 250],
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
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
      },
    });
  }, []);

  // ---------------- BAR CHART ----------------
  useEffect(() => {
    if (barInstance.current) barInstance.current.destroy();
    if (!barRef.current) return;

    const ctx = barRef.current.getContext("2d")!;

    barInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          {
            data: [600, 300, 250, 300, 80, 600],
            backgroundColor: "rgba(0,0,255,0.5)",
          },
          {
            data: [500, 250, 150, 200, 400, 250],
            backgroundColor: "rgba(100,150,150,0.3)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
      },
    });
  }, []);

  return (
    <div className="bg-white border-b lg:border-r w-full lg:w-[360px]">
      {/* Monthly Earnings */}
      <div className="border-b px-4 sm:px-6 py-6 sm:py-9">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Monthly Earnings
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Total profit gained
            </p>
          </div>
          <ThreeDots />
        </div>

        <div className="flex items-center justify-between mt-4 gap-3">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-700">
              $25,049
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm mt-2">
              <span className="rounded-full bg-green-100 border border-green-200 px-2 text-green-800">
                +4.33%
              </span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>

          <div className="w-24 sm:w-28 h-14 sm:h-16">
            <canvas ref={lineRef} />
          </div>
        </div>
      </div>

      {/* Visitor Value */}
      <div className="px-4 sm:px-6 py-6 sm:py-9">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Visitor Value
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Avg. income per site visit
            </p>
          </div>
          <ThreeDots />
        </div>

        <div className="flex items-center justify-between mt-4 gap-3">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-700">
              $63.02
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm mt-2">
              <span className="rounded-full bg-red-100 border border-red-200 px-2 text-red-800">
                -1.03%
              </span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>

          <div className="w-24 sm:w-28 h-14 sm:h-16">
            <canvas ref={barRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;

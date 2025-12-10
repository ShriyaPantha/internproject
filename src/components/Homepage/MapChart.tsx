import React, { useEffect, useRef } from "react";
import { DropdownMenuRadioGroupDemo } from "../ui/lastmonth";
import Chart from "chart.js/auto";
// import WorldMap from "../Homepage/WorldMap";
 // 👉 import the map here

const MapChart = () => {
  const barRef = useRef<HTMLCanvasElement | null>(null);
  const barInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!barRef.current) return;

    if (barInstance.current) barInstance.current.destroy();

    const ctx = barRef.current.getContext("2d");
    const dates = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const currentYear = [600, 300, 250, 300, 80, 600];
    const lastYear = [500, 250, 150, 200, 400, 250];

    barInstance.current = new Chart(ctx!, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          { label: "Current", data: currentYear, backgroundColor: "rgba(0,0,255,0.5)" },
          { label: "Last", data: lastYear, backgroundColor: "rgba(100,150,150,0.3)" },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { display: false },
          y: { display: false },
        },
      },
    });
  }, []);

  return (
    <div className="px-5 py-4">
      <div className="flex justify-between">
        <div className="text-xl px-9 font-bold">Most Clients</div>
        <DropdownMenuRadioGroupDemo />
      </div>

      <div className="px-9">Our client number based on their primary location</div>

      {/* ⭐ MAP SECTION ABOVE BAR CHART */}
      <div className="px-9 mt-6">
        {/* <WorldMap /> */}
      </div>

      {/* ⭐ BAR CHART BELOW */}
      <div className="h-64 px-9 mt-6">
        <canvas ref={barRef}></canvas>
      </div>
    </div>
  );
};

export default MapChart;

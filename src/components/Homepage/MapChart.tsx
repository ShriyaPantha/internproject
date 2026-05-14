import React, { useEffect, useRef, useState } from "react"
import { DropdownMenuRadioGroupDemo } from "../ui/lastmonth"
import Chart from "chart.js/auto"
import WorldMapCard from "./WorldMap"

const MapChart = () => {
  const barRef = useRef<HTMLCanvasElement | null>(null)
  const barInstance = useRef<Chart | null>(null)
  const [isDark, setIsDark] = useState(false)

  // Detect dark mode dynamically
  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"))

    checkDark() // initial check

    const observer = new MutationObserver(() => checkDark())
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  // Create / update Chart.js whenever isDark changes
  useEffect(() => {
    if (!barRef.current) return
    const ctx = barRef.current.getContext("2d")

    if (barInstance.current) barInstance.current.destroy()

    const dates = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const currentYear = [600, 300, 250, 300, 80, 600]
    const lastYear = [500, 250, 150, 200, 400, 250]

    barInstance.current = new Chart(ctx!, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Current",
            data: currentYear,
            backgroundColor: isDark
              ? "rgba(96,165,250,0.8)" // blue-400
              : "rgba(0,0,255,0.5)",
          },
          {
            label: "Last",
            data: lastYear,
            backgroundColor: isDark
              ? "rgba(148,163,184,0.4)" // slate-400
              : "rgba(100,150,150,0.3)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
      },
    })
  }, [isDark])

  return (
    <div className="px-5 py-4 rounded-xl bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-between items-center px-9">
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Most Clients
        </div>
        <DropdownMenuRadioGroupDemo />
      </div>

      <div className="px-9 text-gray-600 dark:text-gray-400">
        Our client number based on their primary location
      </div>

      {/* MAP */}
      <div className="px-9 mt-6 world-map-wrapper">
        <WorldMapCard />

      </div>

      {/* BAR CHART */}
      <div className="h-64 px-9 mt-6">
        <canvas ref={barRef}></canvas>
      </div>
    </div>
  )
}

export default MapChart

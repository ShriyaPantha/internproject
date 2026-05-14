import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ThreeDots } from "../ui/threedot";

export default function DoughnutBrands() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    canvas.style.touchAction = "none";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            data: [30, 32, 23, 15],
            backgroundColor: ["#4A90E2", "#8E8E8E", "#3A3A3A", "#1B6EF3"],
            borderWidth: 0,
            cutout: "95%",
            borderRadius: 50,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "nearest", intersect: true },
        events: [
          "mousemove",
          "pointerdown",
          "pointermove",
          "pointerup",
          "touchstart",
          "touchmove",
          "touchend",
        ],
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: "rgba(255,255,255,0.9)",
            titleColor: "#111827",
            bodyColor: "#111827",
            padding: 8,
            displayColors: false,
            callbacks: {
              label: (ctx: any) => {
                const label = ctx.label ?? "";
                const value = ctx.raw ?? ctx.parsed ?? "";
                return `${label}: ${value}%`;
              },
            },
          },
        },
        scales: {},
      },
    });

    chartInstance.current = chart;

    const showTooltipAt = (clientX: number, clientY: number) => {
      if (!chart || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const ev = { clientX, clientY } as unknown as Event;

      const elements = chart.getElementsAtEventForMode(
        ev,
        "nearest",
        { intersect: true },
        true
      );

      if (elements && elements.length) {
        chart.setActiveElements?.(elements);
        chart.tooltip?.setActiveElements?.(elements, { x: clientX, y: clientY });
        chart.update("none");
      } else {
        chart.setActiveElements?.([]);
        chart.tooltip?.setActiveElements?.([], { x: clientX, y: clientY });
        chart.update("none");
      }
    };

    const onPointer = (e: PointerEvent) => {
      if (e.isPrimary === false) return;
      showTooltipAt(e.clientX, e.clientY);
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.changedTouches && e.changedTouches[0];
      if (!t) return;
      showTooltipAt(t.clientX, t.clientY);
    };
    const onMouse = (e: MouseEvent) => showTooltipAt(e.clientX, e.clientY);

    canvas.addEventListener("pointerdown", onPointer, { passive: true });
    canvas.addEventListener("pointermove", onPointer, { passive: true });
    canvas.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("mousemove", onMouse, { passive: true });

    return () => {
      canvas.removeEventListener("pointerdown", onPointer);
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("mousemove", onMouse);
      chartInstance.current?.destroy();
      chartInstance.current = null;
    };
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm w-full rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Market Share</div>
        <ThreeDots />
      </div>

      <div className="text-gray-500 dark:text-gray-400 text-sm pb-3">
        Amount of revenue in one month
      </div>

      {/* Doughnut Chart */}
      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64">
          <canvas ref={chartRef} className="w-full h-full" />
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-3xl font-semibold">$6,322.32</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total transactions</p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 my-6" />

      {/* Brand List */}
      <div className="space-y-4">
        {[
          { name: "Alligator", color: "bg-blue-500", percent: "29.7%", change: "+6.01%", changeColor: "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200" },
          { name: "CheckMark", color: "bg-gray-400", percent: "31.9%", change: "+4.12%", changeColor: "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200" },
          { name: "Stripes", color: "bg-gray-700", percent: "23%", change: "-3.91%", changeColor: "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200" },
          { name: "Head & Mead", color: "bg-blue-700", percent: "14.4%", change: "0.01%", changeColor: "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200" },
        ].map((brand, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className={`w-1 h-6 ${brand.color} rounded-full`}></div>
                <span className="font-medium">{brand.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold">{brand.percent}</span>
                <span className={`text-xs px-3 py-1 rounded-full ${brand.changeColor}`}>
                  {brand.change}
                </span>
              </div>
            </div>
            {idx !== 3 && <div className="border-b border-gray-200 dark:border-gray-700" />}
          </div>
        ))}
      </div>
    </div>
  );
}

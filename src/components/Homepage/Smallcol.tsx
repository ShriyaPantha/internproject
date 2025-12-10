import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ThreeDots } from "../ui/threedot";

export default function DoughnutBrands() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    // ensure canvas can receive pointer events (overlay will be pointer-events-none)
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
        interaction: {
          mode: "nearest",
          intersect: true,
        },
        events: ["mousemove", "pointerdown", "pointermove", "pointerup", "touchstart", "touchmove", "touchend"],
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: "rgba(0,0,0,0.85)",
            titleColor: "#fff",
            bodyColor: "#fff",
            padding: 8,
            displayColors: false,
            // you can customize the tooltip label here
            callbacks: {
              label: (ctx: any) => {
                const label = ctx.label ?? "";
                const value = ctx.raw ?? ctx.parsed ?? "";
                // compute percentage if you want:
                // const total = ctx.dataset.data.reduce((a:number,b:number)=>a+b,0);
                // const pct = ((value/total)*100).toFixed(1) + "%";
                return `${label}: ${value}%`;
              },
            },
          },
        },
      },
    });

    chartInstance.current = chart;

    // Helper to convert client coords -> chart elements & show tooltip
    const showTooltipAt = (clientX: number, clientY: number) => {
      if (!chart || !canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Chart.js expects an event-like object with clientX/clientY
      const ev = { clientX: clientX, clientY: clientY } as unknown as Event;

      // get elements under the point
      const elements = chart.getElementsAtEventForMode(ev, "nearest", { intersect: true }, true);

      if (elements && elements.length) {
        // elements are objects with datasetIndex & index
        // Use setActiveElements + tooltip.setActiveElements (works in modern Chart.js)
        try {
          // set active elements for visual highlight
          if (typeof chart.setActiveElements === "function") {
            chart.setActiveElements(elements);
          } else if (chart.tooltip && typeof chart.tooltip.setActiveElements === "function") {
            // fallback
            chart.tooltip.setActiveElements(elements, { x: clientX, y: clientY });
          }

          // show tooltip using new API if available
          if (chart.tooltip && typeof chart.tooltip.setActiveElements === "function") {
            chart.tooltip.setActiveElements(elements, { x: clientX, y: clientY });
          }

          // update chart without animation
          chart.update("none");
        } catch (err) {
          // fallback: call update only (older Chart.js versions)
          chart.update();
        }
      } else {
        // clear active elements / hide tooltip if tap outside slices
        try {
          if (chart.setActiveElements) chart.setActiveElements([]);
          if (chart.tooltip && chart.tooltip.setActiveElements) chart.tooltip.setActiveElements([], { x: clientX, y: clientY });
          chart.update("none");
        } catch {
          chart.update();
        }
      }
    };

    // Pointer events (preferred)
    const onPointer = (e: PointerEvent) => {
      // only handle primary pointers to avoid multi-touch weirdness
      if (e.isPrimary === false) return;
      showTooltipAt(e.clientX, e.clientY);
    };

    // Touch fallback (for older browsers)
    const onTouch = (e: TouchEvent) => {
      const t = e.changedTouches && e.changedTouches[0];
      if (!t) return;
      showTooltipAt(t.clientX, t.clientY);
    };

    // Mouse fallback (desktop)
    const onMouse = (e: MouseEvent) => {
      showTooltipAt(e.clientX, e.clientY);
    };

    // Attach listeners
    canvas.addEventListener("pointerdown", onPointer, { passive: true });
    canvas.addEventListener("pointermove", onPointer, { passive: true });
    canvas.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("mousemove", onMouse, { passive: true });

    // Clean up
    return () => {
      canvas.removeEventListener("pointerdown", onPointer);
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("mousemove", onMouse);
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="p-6 bg-white  shadow-sm w-full">
      <div className="flex justify-between">
        <div>Market Share</div>
        <ThreeDots />
      </div>

      <div className="pb-3">Amount of revenue in one month</div>

      <div className="flex flex-col items-center">
        <div className="relative w-64 h-64">
          {/* make canvas fill parent so chart sizing works */}
          <canvas ref={chartRef} className="w-full h-full" />

          {/* Center Text — IMPORTANT: allow touches to pass through */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-3xl font-semibold">$6,322.32</p>
            <p className="text-gray-500 text-sm">Total transactions</p>
          </div>
        </div>
      </div>

      <div className="border-b my-6" />

      {/* BRAND LIST (unchanged) */}
    <div className="space-y-4">
  {/* Alligator */}
  <div>
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
        <span className="font-medium">Alligator</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold">29.7%</span>
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">6.01%</span>
      </div>
    </div>
    <div className="border-b" />
  </div>

  {/* CheckMark */}
  <div>
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
        <span className="font-medium">CheckMark</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold">31.9%</span>
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">4.12%</span>
      </div>
    </div>
    <div className="border-b" />
  </div>

  {/* Stripes */}
  <div>
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-gray-700 rounded-full"></div>
        <span className="font-medium">Stripes</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold">23%</span>
        <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">-3.91%</span>
      </div>
    </div>
    <div className="border-b" />
  </div>

  {/* Head & Mead */}
  <div>
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-blue-700 rounded-full"></div>
        <span className="font-medium">Head & Mead</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold">14.4%</span>
        <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600">0.01%</span>
      </div>
    </div>
    <div className="" />
  </div>
</div>

    </div>
  );
}

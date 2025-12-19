import Chart from "react-apexcharts";

const Tenth = () => {
  const chartOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      borderColor: "#e5e7eb",
    },
    xaxis: {
      categories: [
        "Dec 09",
        "Dec 10",
        "Dec 11",
        "Dec 12",
        "Dec 13",
        "Dec 14",
        "Dec 15",
        "Dec 16",
        "Dec 17",
      ],
    },
    colors: ["#3b82f6", "#f97316"],
    legend: {
      position: "top",
    },
  };

  const chartSeries = [
    {
      name: "Project A",
      data: [60, 80, 90, 140, 270, 270, 150, 120],
    },
    {
      name: "Project B",
      data: [40, 25, 70, 50, 170, 170, 110, 260],
    },
  ];

  return (
    <div className="h-[420px] flex flex-col">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold">
          Hours completed by projects
        </h3>
        <p className="text-sm text-gray-500">
          Status of completion for all tasks
        </p>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Tenth;

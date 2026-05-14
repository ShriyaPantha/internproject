import Chart from "react-apexcharts";
import { MoreVertical } from "lucide-react";
import { ThreeDots } from "../ui/threedot";

const RevenueGenerated = () => {
  const series = [
    { name: "25th", data: [250, 180, 270, 220, 120, 150, 200] },
    { name: "50th", data: [350, 280, 370, 320, 200, 250, 300] },
    { name: "75th", data: [450, 380, 470, 420, 300, 350, 400] },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: true },
    },
    plotOptions: {
      bar: {
        columnWidth: "55%",
        borderRadius: 1,
        // barGap: "15%" ,
        
      },

      
    },

    
    colors: ["#E5EDF3", "#2FB171", "#4F83F1"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false, // 👈 removed top legend
    },
    xaxis: {
      categories: [
        "2023 Q1",
        "2023 Q2",
        "2023 Q3",
        "2023 Q4",
        "2024 Q1",
        "2024 Q2",
        "2024 Q3",
      ],
    },
    yaxis: {
      opposite: true, // 👈 numbers on RIGHT side
      max: 500,
      labels: {
        formatter: (val) => `${val}k`,
      },
    },
    grid: {
      strokeDashArray: 4,
      padding: {
        left:  2,
        right: 20,
      },
    },
  };

  return (
    <div className="bg-white p-6  border">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">Revenue Generated</h2>

          {/* Subtitle + inline legend */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
            <span>Amount of revenue in this month</span>

            <div className="flex items-center gap-3">
              <Legend color="#E5EDF3" label="25th" />
              <Legend color="#2FB171" label="50th" />
              <Legend color="#4F83F1" label="75th" />
            </div>
          </div>
        </div>

        {/* Three dots */}
        <ThreeDots/>
      
      </div>

      {/* Chart */}
      <Chart options={options} series={series} type="bar" height={320} />
    </div>
  );
};

const Legend = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-1">
    <span
      className="w-3 h-3 rounded-sm"
      style={{ backgroundColor: color }}
    />
    <span>{label}</span>
  </div>
);

export default RevenueGenerated;

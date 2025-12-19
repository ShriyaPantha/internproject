import Chart from "react-apexcharts";

const ProjectDeadlinesChart = () => {
  const series = [13, 61, 26]; 

 const options: ApexCharts.ApexOptions = {
  chart: {
    type: "radialBar",
    sparkline: { enabled: true },
  },
  colors: ["#22C55E", "#3B82F6", "#FB923C"],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "40%", // 🔥 increase this to make it thinner
      },
      track: {
        background: "#E5EDF3",
        strokeWidth: "100%", // optional
      },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: "22px",
          fontWeight: 600,
          color: "#0E142B",

          offsetY: 6,
          formatter: () => "23",
        },
        total: {
          show: true,
          formatter: () => "23",
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Before deadline", "On deadline", "After deadline"],
};


  return (

      <Chart options={options} series={series} type="radialBar" height={200} />
  );
};

export default ProjectDeadlinesChart;

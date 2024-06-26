import React from "react";
import Chart from "react-apexcharts";

const options = {
  labels: ["Income", "Expense"],
  colors: ["green", "red"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#008000", "#FF0000"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

const TransitionChart = ({ income = 100, expense = 100}) => {
  return (
    <Chart
      options={options}
      type="pie"
      series={[income, expense]}
      width="100%"
      height="100%"
    />
  );
};

export default TransitionChart;

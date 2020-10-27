import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  if (!confirmed) {
    return "Loading..";
  }

  const barChart = confirmed.value ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Death"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <div className={styles.container}>{barChart}</div>;
};

export default Chart;

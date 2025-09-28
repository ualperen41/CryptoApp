import { Line } from "react-chartjs-2";
import "chart.js/auto";

const PriceChart = ({ symbol, days, priceHistory }) => {
  const data = {
    labels: priceHistory.map((item) => item.timestamp),
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 200, 400, 250, 90, 899, 356, 100],
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };
  return (
    <div className="h-80 w-full">
      <Line data={data} />
    </div>
  );
};

export default PriceChart;

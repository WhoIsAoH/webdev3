import { useEffect, useState } from "react";
import axiosInstance from "../Config/Api";
import { useParams } from "react-router";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import useStyles from "./Banner/style";
import { toast } from "react-toastify";

const CoinInfo = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [historicalData, setHistoricalData] = useState();

  useEffect(() => {
    const fetchCoinChartData = async () => {
      try {
        const response = await axiosInstance.get(`/coin/${id}/ohlc`);
        setHistoricalData(response.data.data.ohlc);
      } catch (error) {
        toast.error("Oops! Something went wrong");
      }
    };
    fetchCoinChartData();
  }, [id]);

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const data = {
    labels: historicalData && historicalData.map((data) => new Date(data.startingAt * 1000).toLocaleDateString()),
    datasets: [
      {
        label: "Open Price",
        data: historicalData && historicalData.map((data) => parseFloat(data.open)),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Close Price",
        data: historicalData && historicalData.map((data) => parseFloat(data.close)),
        fill: false,
        borderColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.1,
      },
      {
        label: "high",
        data: historicalData && historicalData.map((data) => parseFloat(data.high)),
        fill: false,
        borderColor: "red",
        tension: 0.1,
      },
      {
        label: "low",
        data: historicalData && historicalData.map((data) => parseFloat(data.low)),
        fill: false,
        borderColor: "green",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div>
        <h2 className={classes.infoTitle}>Historical Data Chart</h2>
        <Line data={data} />
      </div>
    </>
  );
};

export default CoinInfo;

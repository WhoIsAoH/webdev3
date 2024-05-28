import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../Config/Api";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { CircularProgress, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import CoinSupply from "../Components/CoinSupply";
import { toast } from "react-toastify";

const CoinPriceHistory = () => {
  const { id } = useParams();
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [coinPrice, setCoinPrice] = useState([]);

  const fetchCoinPrice = async () => {
    try {
      const response = await axiosInstance.get(`/coin/${id}/history`);
      setCoinPrice(response.data.data.history);
      setLoading(false);
    } catch (error) {
      toast.error("Oops! Something went wrong");
    }
  };

  useEffect(() => {
    fetchCoinPrice();
  }, []);

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const data = {
    labels: coinPrice && coinPrice.map((data) => new Date(data.timestamp * 1000).toLocaleDateString()),
    datasets: [
      {
        label: "Price History",
        data: coinPrice && coinPrice.map((data) => parseFloat(data.price)),
        fill: false,
        borderColor: "Green",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container>
      {loading ? (
        <>
          <>
            <Grid item xs={12} md={12}>
              <div className={classes.loadingContainer}>
                <CircularProgress className={classes.circularProgress} size={100} />
              </div>
            </Grid>
          </>
        </>
      ) : (
        <>
          <Grid container>
            <Grid item xs={12} md={4} lg={4}>
              <Typography variant="h5" style={{ margin: "1rem 0rem", color: "#074c6c", fontWeight: "bolder" }}>
                Coin Supply
              </Typography>
              <CoinSupply />
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <Typography variant="h5" style={{ margin: "1rem 0rem", color: "#074c6c", fontWeight: "bolder" }}>
                Price History
              </Typography>
              <Line data={data} />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};
export default CoinPriceHistory;

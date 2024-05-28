import React, { useEffect, useState } from "react";
import axiosInstance from "../Config/Api";
import { useParams } from "react-router";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import { toast } from "react-toastify";

const CoinSupply = () => {
  const { id } = useParams();
  const classes = useStyles();

  const [coinSupply, setCoinSupply] = useState({
    maxAmount: 0,
    totalAmount: 0,
    circulatingAmount: 0,
  });

  const fetchCoinSupply = async () => {
    try {
      const response = await axiosInstance.get(`/coin/${id}/supply`);
      setCoinSupply(response.data.data.supply);
    } catch (error) {
      toast.error("Oops! Something went wrong");
    }
  };

  useEffect(() => {
    fetchCoinSupply();
  }, [id]);

  return (
    <Box>
      <Box className={classes.supply}>
        Maximum Amount: <span>{coinSupply.maxAmount}</span>
      </Box>
      <Box className={classes.supply}>
        Total Synced At: <span>{coinSupply.totalSyncedAt}</span>
      </Box>
      <Box className={classes.supply}>
        Total Amount: <span>{coinSupply.totalAmount}</span>
      </Box>
      <Box className={classes.supply}>
        Circulating Synced At: <span>{coinSupply.circulatingSyncedAt}</span>
      </Box>
      <Box className={classes.supply}>
        Circulating Amount: <span>{coinSupply.circulatingAmount}</span>
      </Box>
    </Box>
  );
};
export default CoinSupply;

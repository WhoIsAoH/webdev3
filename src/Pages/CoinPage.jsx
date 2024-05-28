import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../Config/Api";
import CoinInfo from "../Components/CoinInfo";
import useStyles from "./style";
import { Box, Button, CircularProgress, Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CoinPage = () => {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  function numberSeperatedByComa(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await axiosInstance.get(`/coin/${id}`);
        setCoinDetail(response.data.data.coin);
        setLoading(false);
      } catch (error) {
        toast.error("Oops! Something went wrong");
      }
    };

    fetchCoin();
  }, [id]);

  return (
    <Box>
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
            <Grid container spacing={2}>
              {/* Left Side */}
              <Grid item xs={12} md={5}>
                <div className={classes.leftSide}>
                  {/* sidebar */}
                  <div className={classes.imgWrapper}>
                    <img className={classes.coinDetailImg} src={coinDetail?.iconUrl} />
                  </div>
                  <div>
                    <Typography className={classes.title} variant="h4">
                      {coinDetail?.name} - {coinDetail?.symbol}
                    </Typography>
                    <span className={classes.description}>{coinDetail?.description}</span>
                    <ul className={classes.list}>
                      <li className={classes.listTitle}>
                        <i className="fa-solid fa-ranking-star"></i> <span>Rank : </span> {coinDetail?.rank}
                      </li>
                      <li className={classes.listTitle}>
                        <i className="fa-solid fa-dollar-sign"></i> <span>Price : </span>
                        {numberSeperatedByComa(`$ ${coinDetail?.priceAt}`)}
                      </li>
                      <li className={classes.listTitle}>
                        <i className="fa-solid fa-bolt"></i> <span>Change : </span> {coinDetail?.change}
                      </li>
                      <li className={classes.listTitle}>
                        <i className="fa-solid fa-chart-line"></i> <span>MarketCap : </span> {numberSeperatedByComa(`$ ${coinDetail?.marketCap}`)}
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>

              {/* Right Side */}
              <Grid item xs={12} md={7}>
                <Button className={classes.priceButton}>
                  <Link to={`/coin/${id}/price/history`}>Price History</Link>
                </Button>
                {coinDetail && <CoinInfo coin={coinDetail} />}
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default CoinPage;

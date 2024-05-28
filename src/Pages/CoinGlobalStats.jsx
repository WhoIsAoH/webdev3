import { Container, Box, Typography, makeStyles, Grid, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import axiosInstance from "../Config/Api";
import { toast } from "react-toastify";
import { BorderBottom } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  statsBox: {
    background: "#027495",
    color: "white",
    fontWeight: "bolder",
    textAlign: "center",
    borderRight: "5px solid #c18901",
    margin: "1rem 0rem",
    padding: "1.5rem 1rem",
    fontSize: "1.2rem",
    borderRadius: "10px",
    marginBottom: "0.5rem",
  },
  flexBox: {
    display: "block",
    flexWrap: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      columnGap: "1rem",
      flexWrap: "wrap",
      justifyContent: " center",
    },
  },
  bestCoinImg: {
    height: "100px",
    width: "100px",
    borderRadius: "100px",
  },
  flexBoxBestCoin: {
    display: "flex",
    alignItems: "center",
    columnGap: "2rem",
    background: "#c18901",
    borderRadius: "50px 0px 0px 50px",
    borderLeft: "8px solid  #027495",
    borderBottom: "6px solid black",
    marginBottom: "1rem",
    padding: "0rem 1rem",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      columnGap: "1rem",
      alignItems: "center",
    },
    "& span": {
      fontSize: "1rem",
    },
  },
  parentFlex: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginTop: "1.5rem",
      justifyContent: "space-around",
    },
  },
  statsTitle: {
    color: "#074c6c",
    fontWeight: "bold",
    margin: "1rem 0rem",
    textAlign: "center",
    fontSize: "1.6rem",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  circularProgress: {
    color: "#074c6c",
  },
}));

const CoinGlobalStats = () => {
  const [coinGlobalStats, setCoinGlobalStats] = useState();
  const [loading, setLoading] = useState(true);
  const fetchGlobalStatsCoin = async () => {
    try {
      const response = await axiosInstance.get(`/stats`);
      setCoinGlobalStats(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error("Oops! Something went wrong");
    }
  };

  useEffect(() => {
    fetchGlobalStatsCoin();
  }, []);
  const classes = useStyles();

  return (
    <Container>
      {loading ? (
        <Grid item xs={12} lg={12} md={12}>
          <div className={classes.loadingContainer}>
            <CircularProgress className={classes.circularProgress} size={100} />
          </div>
        </Grid>
      ) : (
        <>
          <Box>
            <Typography variant="h6" className={classes.statsTitle}>
              Global Statistics
            </Typography>
            <Grid className={classes.flexBox}>
              <Grid md={3} lg={3} sm={12} className={classes.statsBox}>
                <Box>
                  <Box>{coinGlobalStats.totalCoins}</Box>
                  <span>Total Coins</span>
                </Box>
              </Grid>
              <Grid md={3} lg={3} sm={12} className={classes.statsBox}>
                <Box>
                  <Box>{coinGlobalStats.totalMarkets}</Box>
                  <span>Total Markets</span>
                </Box>
              </Grid>
              <Grid md={3} lg={3} sm={12} className={classes.statsBox}>
                <Box>
                  <Box>{coinGlobalStats.totalExchanges}</Box>
                  <span>Total Exchange</span>
                </Box>
              </Grid>
              <Grid md={3} lg={3} sm={12} className={classes.statsBox}>
                <Box>
                  <Box>{coinGlobalStats.totalMarketCap}</Box>
                  <span>Total Market Cap</span>
                </Box>
              </Grid>
              <Grid md={3} lg={3} sm={12} className={classes.statsBox}>
                <Box>
                  <Box>{coinGlobalStats.total24hVolume}</Box>
                  <span>Total 24 Volume</span>
                </Box>
              </Grid>
              <Grid md={3} lg={3} sm={12} className={classes.statsBox}>
                <Box>
                  <Box>{coinGlobalStats.btcDominance}</Box>
                  <span>BTC Dominance</span>
                </Box>
              </Grid>
            </Grid>

            <Grid className={classes.parentFlex}>
              <Grid md={4} lg={4} sm={12}>
                <Typography variant="h6" className={classes.statsTitle}>
                  Best Coins
                </Typography>
                {coinGlobalStats &&
                  coinGlobalStats.newestCoins.map((stats) => (
                    <>
                      <Box>
                        <Grid className={classes.flexBoxBestCoin}>
                          <Box>
                            <img src={stats.iconUrl} className={classes.bestCoinImg} />
                          </Box>
                          <Box>
                            <span>{stats.name}</span>
                          </Box>
                        </Grid>
                      </Box>
                    </>
                  ))}
              </Grid>

              <Grid md={4} lg={4} sm={12}>
                <Typography variant="h6" className={classes.statsTitle}>
                  Newest Coins
                </Typography>
                {coinGlobalStats &&
                  coinGlobalStats.bestCoins.map((stats) => (
                    <>
                      <Box>
                        <Grid className={classes.flexBoxBestCoin}>
                          <Box>
                            <img src={stats.iconUrl} className={classes.bestCoinImg} />
                          </Box>
                          <Box>
                            <span>{stats.name}</span>
                          </Box>
                        </Grid>
                      </Box>
                    </>
                  ))}
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default CoinGlobalStats;

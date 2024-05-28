import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Container, Grid, InputAdornment, LinearProgress, TextField, Typography } from "@material-ui/core";
import useStyles from "./style";
import { useEffect, useState } from "react";
import axiosInstance from "../../Config/Api";
import SearchIcon from "@material-ui/icons/Search";
import { Pagination } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faBitcoinSign, faMoneyBillTrendUp, faShop } from "@fortawesome/free-solid-svg-icons";
import CalculateProfitPercentage from "./CalculateProfitPercentage";

const CoinList = () => {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const fetchTrendingCoins = async () => {
    try {
      const response = await axiosInstance.get("/coins");
      const { data } = response.data;
      const coinsData = data.coins;
      setCoins(coinsData);
      setStats(data.stats);
      setLoading(false);
    } catch (error) {
      toast.error("Oops! Something went wrong");
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  function numberSeperatedByComa(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleSearchByCoin = (searchInput) => {
    const filterCoin = coins.filter((coin) => coin.name.toLowerCase().includes(searchInput.toLowerCase()));
    const updatedCoins = searchInput.trim() === "" ? coins : filterCoin;
    setCoins(updatedCoins);
  };
  const pageCount = Math.ceil(coins.length / itemsPerPage);
  const displayCoins = coins.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <Container>
        <Typography variant="h5" className={classes.tableTitle}>
          STATISTIC <span className={classes.design}>DATA</span>
        </Typography>
        <Box className={classes.boxWrapper}>
          <Grid md={3} lg={3} sm={12} className={classes.statsWrapper}>
            <div className={classes.stats}>
              <div>
                <FontAwesomeIcon className={classes.icon} icon={faBitcoinSign} />
              </div>
              <div>
                <div className={classes.statsCount}> Coins : {stats && stats.totalCoins}</div>
              </div>
            </div>
          </Grid>
          <Grid md={3} lg={3} sm={12} className={classes.statsWrapper}>
            <div className={classes.stats}>
              <div>
                <FontAwesomeIcon icon={faShop} />
              </div>
              <div>
                <div className={classes.statsCount}> Markets : {stats && stats.totalMarkets}</div>
              </div>
            </div>
          </Grid>
          <Grid md={3} lg={3} sm={12} className={classes.statsWrapper}>
            <div className={classes.stats}>
              <div>
                <FontAwesomeIcon icon={faArrowsRotate} />
              </div>
              <div>
                <div className={classes.statsCount}> Exchange : {stats && stats.totalExchanges}</div>
              </div>
            </div>
          </Grid>
          <Grid md={3} lg={3} sm={12} className={classes.statsWrapper}>
            <div className={classes.stats}>
              <div>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
              </div>
              <div>
                <div className={classes.statsCount}> Market Cap : {stats && stats.totalMarketCap}</div>
              </div>
            </div>
          </Grid>
        </Box>
        <Typography variant="h5" className={classes.tableTitle}>
          CRYPTO CURRENCY <span className={classes.design}>PRICE</span>
        </Typography>
        <Box className={classes.searchBox}>
          <TextField
            id="outlined-secondary"
            variant="outlined"
            className={classes.searchText}
            InputProps={{
              style: { color: "white", border: "1px solid #423f3f", marginBottom: "0.3rem", borderRadius: "100px" },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#c18901", fontSize: "2.1rem" }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearchByCoin(e.target.value);
            }}
          />
          <Button className={classes.priceButton}>
            <Link to={`/stats`}>Global Statistic</Link>
          </Button>
        </Box>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }}></LinearProgress>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableRow}> Coin</TableCell>
                    <TableCell className={classes.tableRow} align="center">
                      Price
                    </TableCell>
                    <TableCell className={classes.tableRow} align="center">
                      Market Cap
                    </TableCell>
                    <TableCell className={classes.tableRow} align="center">
                      Change
                    </TableCell>

                    <TableCell className={classes.tableRow} align="center">
                      Rank
                    </TableCell>
                    <TableCell className={classes.tableRow} align="center">
                      Profit Percentage
                    </TableCell>
                    <TableCell className={classes.tableRow} align="center">
                      Listed At
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {displayCoins && coins.length > 0 ? (
                    displayCoins.map((coin) => (
                      <TableRow key={coin.uuid}>
                        <TableCell className={classes.tableRow} component="th" scope="row">
                          <Link to={`/coin/${coin.uuid}`} style={{ cursor: "pointer" }} className={classes.link}>
                            <div className={classes.group}>
                              <div>
                                <img className={classes.tableImg} src={coin.iconUrl} alt={coin.name} />
                              </div>
                              <div>
                                <span>{coin.name}</span> - <span>{coin.symbol}</span>
                              </div>
                            </div>
                          </Link>
                        </TableCell>
                        <TableCell className={classes.tableRow} align="center">
                          {numberSeperatedByComa(`$ ${coin.price}`)}
                        </TableCell>
                        <TableCell className={classes.tableRow} align="center">
                          {numberSeperatedByComa(`$ ${coin.marketCap}`)}
                        </TableCell>
                        <TableCell className={classes.tableRow} align="center">
                          <span className={classes.coinChange}> {coin.change}</span>
                        </TableCell>
                        <TableCell className={classes.tableRow} align="center">
                          {coin.rank}
                        </TableCell>
                        <TableCell className={classes.tableRow} align="center">
                          <span className={classes.coinChange}> {CalculateProfitPercentage(coin.sparkline[0], coin.price)}%</span>
                        </TableCell>
                        <TableCell className={classes.tableRow} align="center">
                          {coin.listedAt}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className={classes.tableRow} align="center">
                        No coins available.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination className={classes.pagination} count={pageCount} page={page} onChange={(event, value) => setPage(value)} />
          </>
        )}
      </Container>
    </>
  );
};

export default CoinList;

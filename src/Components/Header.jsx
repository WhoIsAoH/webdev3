import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import Ribbon from "./Ribbon";
// import { ThemeProvider } from "react-bootstrap";
// import { CryptoState } from "../CryptoContext";

const Header = () => {
  const classes = useStyles();
  // const { currency, setCurrency } = CryptoState();
  // console.log("currency" , currency);
  // const darkTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#c09000",
  //       padding: 0,
  //     },
  //     type: "dark",
  //   },
  // });

  return (
    <div>
      <AppBar className={classes.nav} position="static">
        <Ribbon />
        <Container>
          <Toolbar>
            <div>
              <Link to="/">
                <Typography variant="" className={classes.title}>
                  St Mary’s <span className={classes.crypto}>Cryptos</span>
                </Typography>
              </Link>
            </div>
            {/* <Select variant="outlined" className={classes.select} value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;

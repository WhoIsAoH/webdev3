import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import Ribbon from "./Ribbon";

const Header = () => {
  const classes = useStyles();

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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;

import { Box, Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import useStyles from "./style";

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.banner}>
        <Container>
          <div className={classes.mainTitle}>
            <Typography variant="" className={classes.main}>
              Cryptos <span>Currency</span>
            </Typography>
            <Typography variant="h4" style={{ marginTop: "1rem" }}>
              The future of money is digital currency
            </Typography>
            <Typography style={{ marginTop: "1rem" }} variant="h6">
              Everything will be tokenized and connected by blockchain one day
            </Typography>
          </div>
        </Container>
      </Box>
      <Carousel />
    </>
  );
};

export default Banner;

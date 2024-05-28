import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Container>
        <Grid container>
          <Grid md={6} lg={6} sm={12}>
            <Typography className={classes.footerLogo} variant="h5">
              St Mary's <span>Crypto</span>{" "}
            </Typography>
          </Grid>
          <Grid md={6} lg={6} sm={12}>
            <Typography variant="h6">All Copy rights reserved.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

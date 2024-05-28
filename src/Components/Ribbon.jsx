import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Ribbon = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.ribbon}>
        <span className={classes.flex}>
          {" "}
          <i className="fa-regular fa-envelope"></i> info@gmail.com
          <marquee>Bitcoin is absolutely the Wild West of finance, and thank goodness !!</marquee>
        </span>
      </Box>
    </div>
  );
};

export default Ribbon;

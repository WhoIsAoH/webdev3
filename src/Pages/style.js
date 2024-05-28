import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  coinDetailImg: {
    height: "200px",
    marginTop: "20px",
    border: "2px solid transparent",
    background: "linear - gradient(to right, white, yellow, white)",
    boxShadow: "0 0 0 3px white, 0 0 0 6px yellow, 0 0 0 9px white",
    padding: "0.5rem",
    borderRadius: "100%"
  },
  imgWrapper: {
    justifyContent: "center",
    display: "flex",
    margin: "1rem 0rem"
  },
  leftSide: {
    borderRight: "none",
    padding: "0rem 1rem",
    margin: "1rem 0rem",
    [theme.breakpoints.up("sm")]: {
      borderRight: "1px solid black",
    }
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "0.3rem",
    color: "#074c6c"
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    color: "black"
  },
  list: {
    fontSize: "1.3rem",
    color: "#074c6c",
    listStyle: "none",
    margin: "1rem 0rem",
    "& .fa-solid": {
      marginRight: "0.5rem",
      fontSize: "1.4rem",
      width: "30px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    }
  },
  listTitle: {
    fontWeight: "bolder",
    marginBottom: "0.8rem"
  },
  loadingContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)"
  },
  circularProgress: {
    color: "#074c6c"
  },
  priceButton: {
    color: "black !important",
    background: "#077689",
    marginTop: "1rem",
    float: "inline-end",
    "& a": {
      color: "white !important"
    },
    "&:hover": {
      background: "black",
      color: "white"
    }
  },

}))

export default useStyles
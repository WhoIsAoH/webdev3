import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1.3rem",
    background: "white",
    borderRadius: "20px 0px 20px 0px",
    width: "200px",
    padding: "0.3rem 1rem",
    color: "#074c6c"
  },
  crypto: {
    color: "#c18901"
  },
  select: {
    width: 100,
    height: 40,
    marginLeft: 15,
  },
  nav: {
    backgroundColor: "#074c6c",
    padding: "0",
  },
  supply: {
    fontSize: "1.2rem",
    margin: "0.5rem 0rem",
    color: "black",
    "& span": {
      color: "#c18901"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    }
  },
  ribbon: {
    background: "#077689",
    padding: "0.2rem 5rem",
    textAlign: "left"
  },
  flex: {
    display: "flex",
    alignItems: "center",
    columnGap: "0.5rem",
    justifyItems: "end",
    "& marquee": {
      fontWeight: "bold"
    }
  },
  footer: {
    background: "#074c6c",
    color: "white",
    padding: "1rem 0rem",

  },
  footerLogo: {
    background: "white",
    fontWeight: "bold",
    width: "250px",
    color: "#074c6c",
    textAlign: "center",
    borderRadius: "100px"
  },
  footerIcon: {
    display: "flex",
    columnGap: "1rem",
    fontSize: "1.2rem"
  }
}));

export default useStyles;

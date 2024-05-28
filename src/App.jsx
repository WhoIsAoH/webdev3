import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import CoinPriceHistory from "./Pages/CoinPriceHistory";
import CoinGlobalStats from "./Pages/CoinGlobalStats";
import { ToastContainer } from "react-toastify";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#d4e3f5",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <div className={classes.App}>
          <ToastContainer />
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/coin/:id/price/history" element={<CoinPriceHistory />} />
            <Route path="/stats" element={<CoinGlobalStats />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import useStyles from "./style";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Carousel = () => {
  const classes = useStyles();
  const [coins, setCoins] = useState([
    {
      id: 1,
      name: "Bitcoin",
      price: "$11,4500.00",
      img: "src/assets/coinImg/coin1.png",
    },
    {
      id: 2,
      name: "Ethereum (ETH)",
      price: "$12,4100.00",
      img: "src/assets/coinImg/coin2.png",
    },
    {
      id: 3,
      name: "Tether USDt (USDT)",
      price: "$11,5500.00",
      img: "src/assets/coinImg/coin3.png",
    },
    {
      id: 4,
      name: "BNB (BNB)",
      price: "$13,1100.00",
      img: "src/assets/coinImg/coin4.png",
    },
    {
      id: 5,
      name: "Solana (SOL)",
      price: "$16,2100.00",
      img: "src/assets/coinImg/coin5.png",
    },
    {
      id: 6,
      name: "XRP (XRP) ",
      price: "$10,9100.00",
      img: "src/assets/coinImg/coin6.png",
    },
    {
      id: 7,
      name: "USDC (USDC)",
      price: "$12,7100.00",
      img: "src/assets/coinImg/coin7.png",
    },
    {
      id: 8,
      name: "Toncoin (TON)",
      price: "$19,3100.00",
      img: "src/assets/coinImg/coin8.png",
    },
    {
      id: 9,
      name: "Cardano (ADA)",
      price: "$12,4100.00",
      img: "src/assets/coinImg/coin9.png",
    },
    {
      id: 10,
      name: "Avalanche (AVAX)",
      price: "$11,9100.00",
      img: "src/assets/coinImg/coin10.png",
    },
    {
      id: 11,
      name: "Bitcoin Cash (BCH)",
      price: "$11,5000.00",
      img: "src/assets/coinImg/coin11.png",
    },
    {
      id: 12,
      name: "Internet Computer (ICP)",
      price: "$16,6200.00",
      img: "src/assets/coinImg/coin12.png",
    },
    {
      id: 13,
      name: "Bitcoin",
      price: "$17,1100.00",
      img: "src/assets/coinImg/coin13.png",
    },
    {
      id: 14,
      name: "Bitcoin",
      price: "$12,7100.00",
      img: "src/assets/coinImg/coin14.png",
    },
    {
      id: 15,
      name: "Bitcoin",
      price: "$19,8800.00",
      img: "src/assets/coinImg/coin15.png",
    },
    {
      id: 16,
      name: "Bitcoin",
      price: "$15,4100.00",
      img: "src/assets/coinImg/coin16.png",
    },
    {
      id: 17,
      name: "Bitcoin",
      price: "$10,2100.00",
      img: "src/assets/coinImg/coin17.png",
    },
    {
      id: 18,
      name: "Bitcoin",
      price: "$11,4000.00",
      img: "src/assets/coinImg/coin18.png",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleOpenDialog = (coin) => {
    setOpenDialog(true);
    setSelectedCoin(coin);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const updatePrice = (id, newPrice) => {
    setCoins((prevCoins) => prevCoins.map((coin) => (coin.id === id ? { ...coin, price: newPrice } : coin)));
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (selectedCoin) {
      const id = selectedCoin.id;
      const newPrice = data[`price-${selectedCoin.id}`];
      updatePrice(id, newPrice);
      handleCloseDialog();
    }
  };
  const items = coins.map((coin) => {
    return (
      <>
        <Card className={classes.wrapper}>
          <i className="fa-solid fa-pen-to-square" style={{ color: "white", display: "flex", justifyContent: "end", cursor: "pointer" }} onClick={() => handleOpenDialog(coin)}></i>
          <CardActionArea>
            <img className={classes.carouselImage} src={coin.img} alt={coin.name} />
            <CardContent>
              <span className={classes.text}>{coin.name}</span>
              <span className={classes.textPrice}>{coin.price}</span>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 6,
    },
  };

  return (
    <>
      <Container>
        <Typography className={classes.popularCoin}>
          TRENDING <span>COINS</span>
        </Typography>
        <Box className={classes.carousel}>
          <AliceCarousel className={classes.aliceCarousel} mouseTracking infinite autoPlayInterval={1000} animationDuration={1500} disableButtonsControls responsive={responsive} autoPlay items={items} />
        </Box>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Edit Price</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input style={{ height: "30px" }} type="text" defaultValue={selectedCoin ? selectedCoin.price : ""} {...register(`price-${selectedCoin ? selectedCoin.id : ""}`)} />
              <button style={{ height: "30px", color: "white", background: "#c18901", padding: "0rem 1rem", border: "none" }} type="submit">
                Save
              </button>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default Carousel;

const CalculateProfitPercentage = (initialPrice, currentPrice) => {
  if (initialPrice === 0) {
    throw new Error("Initial price cannot be zero");
  }

  const profit = currentPrice - initialPrice;
  const profitPercentage = ((profit / initialPrice) * 100).toFixed(2);
  return profitPercentage;
};

export default CalculateProfitPercentage;
// module.exports = CalculateProfitPercentage;


const CalculateProfitPercentage = require('../Components/Banner/CalculateProfitPercentage');

describe('calculateProfitPercentage', () => {
  test('should return correct profit percentage when current price is higher than initial price', () => {
    const initialPrice = 100;
    const currentPrice = 150;
    const expectedProfitPercentage = '50.00';

    expect(CalculateProfitPercentage(initialPrice, currentPrice)).toBe(expectedProfitPercentage);
  });

  test('should return correct profit percentage when current price is lower than initial price', () => {
    const initialPrice = 200;
    const currentPrice = 150;
    const expectedProfitPercentage = '-25.00';

    expect(CalculateProfitPercentage(initialPrice, currentPrice)).toBe(expectedProfitPercentage);
  });

  test('should return zero profit percentage when initial price and current price are the same', () => {
    const initialPrice = 100;
    const currentPrice = 100;
    const expectedProfitPercentage = '0.00';

    expect(CalculateProfitPercentage(initialPrice, currentPrice)).toBe(expectedProfitPercentage);
  });

  test('should handle very small initial price correctly', () => {
    const initialPrice = 0.01;
    const currentPrice = 0.02;
    const expectedProfitPercentage = '100.00';

    expect(CalculateProfitPercentage(initialPrice, currentPrice)).toBe(expectedProfitPercentage);
  });

  test('should handle very small profit correctly', () => {
    const initialPrice = 1000;
    const currentPrice = 1000.1;
    const expectedProfitPercentage = '0.01';

    expect(CalculateProfitPercentage(initialPrice, currentPrice)).toBe(expectedProfitPercentage);
  });

  test('should handle zero initial price', () => {
    const initialPrice = 0;
    const currentPrice = 100;

    expect(() => CalculateProfitPercentage(initialPrice, currentPrice)).toThrow('Initial price cannot be zero');
  });
});

import PriceDisplay from './price-display';

type Props = {
  latestPrice: number | null;
  previousPrice: number | null;
  shouldAnimate?: boolean;
};
export default function StockPrice({ latestPrice, previousPrice }: Props) {
  let priceChange = 0;
  let percentageChange = 0;
  let direction: 'up' | 'down' | 'neutral' = 'neutral';

  if (previousPrice !== null && latestPrice !== null) {
    priceChange = latestPrice - previousPrice;
    percentageChange = (latestPrice - previousPrice) / previousPrice;

    if (priceChange > 0) {
      direction = 'up';
    } else if (priceChange < 0) {
      direction = 'down';
    }
  }

  return (
    <PriceDisplay
      price={latestPrice}
      priceChange={priceChange}
      percentageChange={percentageChange}
      direction={direction}
    />
  );
}

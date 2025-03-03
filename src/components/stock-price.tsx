import NumberFlow from "@number-flow/react";
import UpDownIcon from "./up-down-icon";

type Props = {
  latestPrice: number | null;
  previousPrice: number | null;
};
export default function StockPrice({ latestPrice, previousPrice }: Props) {
  let priceChange = 0;
  let percentageChange = 0;
  let direction: "up" | "down" | "neutral" = "neutral";

  if (previousPrice !== null && latestPrice !== null) {
    priceChange = latestPrice - previousPrice;
    percentageChange = (latestPrice - previousPrice) / previousPrice;

    if (priceChange > 0) {
      direction = "up";
    } else if (priceChange < 0) {
      direction = "down";
    }
  }

  const priceChangeClass =
    priceChange > 0
      ? "text-green-600"
      : priceChange < 0
      ? "text-red-600"
      : "text-gray-700 dark:text-gray-200";
  return (
    <div className={`${priceChangeClass} flex items-center font-mono`}>
      <UpDownIcon direction={direction} />
      <p className={`text-sm font-mono font-bold ml-1`}>
        {latestPrice !== null ? (
          <NumberFlow
            isolate
            value={latestPrice}
            format={{ style: "currency", currency: "USD" }}
          />
        ) : (
          "N/A"
        )}
      </p>
      {percentageChange !== 0 && (
        <span className="text-xs ml-2">
          <NumberFlow
            format={{ style: "percent", maximumFractionDigits: 2 }}
            isolate
            value={percentageChange}
          />
        </span>
      )}
    </div>
  );
}

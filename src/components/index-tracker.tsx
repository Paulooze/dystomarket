import { formatCurrency } from "@/lib/formatters";
import UpDownIcon from "./up-down-icon";

interface IndexTrackerProps {
  index: {
    id: number;
    name: string;
    tickerSymbol: string;
    description: string;
    latestPrice: number | null;
    previousPrice: number | null;
  };
}

const IndexTracker: React.FC<IndexTrackerProps> = ({ index }) => {
  let priceChange = 0;
  let percentageChange = 0;
  let direction: "up" | "down" | "neutral" = "neutral";

  if (index.previousPrice !== null && index.latestPrice !== null) {
    priceChange = index.latestPrice - index.previousPrice;
    percentageChange =
      ((index.latestPrice - index.previousPrice) / index.previousPrice) * 100;

    if (priceChange > 0) {
      direction = "up";
    } else if (priceChange < 0) {
      direction = "down";
    }
  }
  const priceChangeClass =
    priceChange > 0
      ? "text-green-500"
      : priceChange < 0
        ? "text-red-500"
        : "text-gray-700 dark:text-gray-200";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
        {index.name} ({index.tickerSymbol})
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
        {index.description}
      </p>
      <div className={`${priceChangeClass} flex items-center font-mono`}>
        <UpDownIcon direction={direction} />
        <p className="font-bold ml-1">
          {formatCurrency(index.latestPrice, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        {percentageChange !== 0 && (
          <span className="text-sm ml-2">({percentageChange.toFixed(2)}%)</span>
        )}
      </div>
    </div>
  );
};

export default IndexTracker;

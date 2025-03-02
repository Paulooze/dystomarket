import NumberFlow from "@number-flow/react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import UpDownIcon from "./up-down-icon";

interface IndexTrackerProps {
  index: {
    id: number;
    name: string;
    tickerSymbol: string;
    description: string;
    latestPrice: number;
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-full">
      <CardTitle>
        <h3 className="text-lg line-clamp-1">
          {index.name} ({index.tickerSymbol})
        </h3>
      </CardTitle>
      <CardDescription>
        {" "}
        <p className="text-sm line-clamp-2">{index.description}</p>
      </CardDescription>
      <CardContent
        className={`${priceChangeClass} flex items-center font-mono`}
      >
        <UpDownIcon direction={direction} />
        <p className="font-bold ml-1">
          <NumberFlow value={index.latestPrice} />
        </p>
        {percentageChange !== 0 && (
          <span className="text-sm ml-2">
            <NumberFlow
              value={percentageChange}
              format={{ style: "percent", maximumFractionDigits: 2 }}
            />
          </span>
        )}
      </CardContent>
    </Card>
  );
};

export default IndexTracker;

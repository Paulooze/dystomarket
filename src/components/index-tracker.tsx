import StockPrice from "./stock-price";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

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
      <CardContent>
        <StockPrice
          latestPrice={index.latestPrice}
          previousPrice={index.previousPrice}
        />
      </CardContent>
    </Card>
  );
};

export default IndexTracker;

import StockPrice from './stock-price';
import { Card, CardContent, CardTitle } from './ui/card';

type Props = {
  index: {
    id: number;
    name: string;
    tickerSymbol: string;
    description: string;
    latestPrice: number;
    previousPrice: number | null;
  };
};

export default function IndexTrackerCard({ index }: Props) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-full">
      <CardTitle className="flex items-start">
        <div className="mr-auto">
          <h3 className="text-lg font-bold  text-dysto-white line-clamp-1">
            {index.name}{' '}
          </h3>
          <p className="text-sm font-semibold text-gray-500 text-gray-50">
            {index.tickerSymbol}
          </p>
        </div>
        <StockPrice
          latestPrice={index.latestPrice}
          previousPrice={index.previousPrice}
        />
      </CardTitle>
      <CardContent className="px-0">
        <p className="text-sm text-dysto-white">{index.description}</p>
      </CardContent>
    </Card>
  );
}

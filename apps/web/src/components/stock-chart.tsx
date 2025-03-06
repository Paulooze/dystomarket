"use client";
import { formatCurrency } from "@/lib/formatters";
import { parseISO, subDays, subWeeks } from "date-fns";
import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import PriceDisplay from "./price-display";
import StockPrice from "./stock-price";
import { ChartContainer, ChartTooltip } from "./ui/chart";
import { Sector, SubIndustry } from "@dystomarket/db";

interface StockPrice {
  timestamp: string;
  price: number;
}

interface StockChartProps {
  prices: StockPrice[];
  company: {
    id: number;
    name: string;
    tickerSymbol: string;
    description: string;
    logoUrl: string;
    latestPrice: number | null;
    sector: Sector;
    subIndustry: SubIndustry;
  };
}

// eslint-disable-next-line
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    const formattedDate = new Date(dataPoint.timestamp).toLocaleString();
    return (
      <div className="bg-white dark:bg-gray-950 p-2 text-gray-900 dark:text-gray-100 rounded-md shadow-md border border-gray-200 dark:border-gray-700">
        <p className="text-sm">{formattedDate}</p>
        <p className="text-sm font-bold">
          {formatCurrency(dataPoint.price, {
            notation: "standard",
            compactDisplay: "long",
          })}
        </p>
      </div>
    );
  }
  return null;
};

const calculatePriceChanges = (
  hoveredPriceObject: StockPrice | null,
  prices: StockPrice[],
  latestPrice: number | null
) => {
  let priceChange = 0;
  let percentageChange = 0;
  let direction: "up" | "down" | "neutral" = "neutral";
  let previousPrice = null;
  const currentPrice =
    hoveredPriceObject !== null ? hoveredPriceObject.price : latestPrice;

  // Find the index of the hovered price *object* by timestamp
  const hoveredPriceIndex = prices.findIndex(
    (p) =>
      p.timestamp === (hoveredPriceObject ? hoveredPriceObject.timestamp : null)
  );

  if (hoveredPriceIndex > 0) {
    // We're hovering, and there's a previous data point
    previousPrice = prices[hoveredPriceIndex - 1].price;
  } else if (prices.length > 1) {
    // Not hovering, use the latest price and its previous
    previousPrice = prices.at(-2)?.price; // Use at(-2)
  }

  if (currentPrice !== null && previousPrice !== null) {
    priceChange = currentPrice - (previousPrice ?? 0);
    percentageChange = (priceChange / (previousPrice ?? 0)) * 100;
    direction = priceChange > 0 ? "up" : priceChange < 0 ? "down" : "neutral";
  }

  return { priceChange, percentageChange, direction };
};

const StockChart: React.FC<StockChartProps> = ({ prices, company }) => {
  const [hoveredPriceObject, setHoveredPriceObject] =
    useState<StockPrice | null>(
      prices.length > 0 ? prices[prices.length - 1] : null
    );
  const [filter, setFilter] = useState<"1d" | "1w">("1d"); // '1d' or '1w'

  const filteredPrices = useMemo(() => {
    if (!prices) {
      return []; // Return empty array if prices is undefined
    }

    const now = new Date();
    let startDate: Date;

    if (filter === "1d") {
      startDate = subDays(now, 1);
    } else if (filter === "1w") {
      startDate = subWeeks(now, 1);
    } else {
      startDate = subDays(now, 1); //default
    }

    return prices.filter((priceData) => {
      return parseISO(priceData.timestamp) >= startDate;
    });
  }, [prices, filter]);

  // eslint-disable-next-line
  const handleMouseMove = (activePayload: any) => {
    if (
      activePayload &&
      activePayload.activePayload &&
      activePayload.activePayload.length
    ) {
      const currentPriceObject = activePayload.activePayload[0]
        .payload as StockPrice;
      setHoveredPriceObject(currentPriceObject); // Store the whole object
    }
  };

  const handleMouseLeave = () => {
    setHoveredPriceObject(prices.length > 0 ? prices[prices.length - 1] : null); // Reset to latest price object
  };

  const { priceChange, percentageChange, direction } = calculatePriceChanges(
    hoveredPriceObject,
    prices,
    company.latestPrice
  );
  const currentPrice =
    hoveredPriceObject !== null
      ? hoveredPriceObject.price
      : company.latestPrice;

  if (prices.length === 0) {
    return <div>No price data available.</div>;
  }

  const minPrice = Math.min(...prices.map((p) => p.price));
  const maxPrice = Math.max(...prices.map((p) => p.price));
  const yAxisPadding = (maxPrice - minPrice) * 0.1;

  return (
    <>
      <div className="mb-4 flex items-cente flex-wrap">
        <PriceDisplay
          price={currentPrice}
          priceChange={priceChange}
          percentageChange={percentageChange}
          direction={direction}
          size="large"
        />
        <div className="flex space-x-2 lg:ml-auto mt-4">
          <button
            className={`cursor-pointer px-4 py-2 rounded ${
              filter === "1d"
                ? "bg-dysto-green text-dysto-dark"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setFilter("1d")}
          >
            1 Day
          </button>
          <button
            className={`cursor-pointer px-4 py-2 rounded ${
              filter === "1w"
                ? "bg-dysto-green text-dysto-dark"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setFilter("1w")}
          >
            1 Week
          </button>
        </div>
      </div>
      <ResponsiveContainer aspect={1}>
        <ChartContainer
          config={{
            stock: {
              label: "Price",
              color: "var(--color-blue-500)",
            },
          }}
          className="aspect-auto h-[350px] w-full"
        >
          <AreaChart
            data={filteredPrices}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            margin={{
              left: 2,
              right: 2,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#ccc"
              vertical={false}
            />
            {/* <XAxis
              dataKey="timestamp"
              tickFormatter={(tick) =>
                new Date(tick).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
              tick={{
                fontSize: 12,
                textAnchor: "end",
              }}
              interval="preserveStartEnd"
              minTickGap={10}
              tickMargin={10}
            /> */}
            <YAxis
              domain={[minPrice - yAxisPadding, maxPrice + yAxisPadding]}
              tickFormatter={(tick) =>
                formatCurrency(tick, { maximumFractionDigits: 2 })
              }
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            {/* <Tooltip content={<CustomTooltip />} /> */}
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="var(--color-dysto-green)"
              fill="url(#colorUv)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
              dot={false}
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-dysto-green)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-dysto-green)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </>
  );
};

export default StockChart;

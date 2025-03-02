"use client";
import { formatCurrency } from "@/lib/formatters";
import { Sector, SubIndustry } from "@prisma/client";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import PriceDisplay from "./price-display";
import { ChartContainer, ChartTooltip } from "./ui/chart";

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
        <p className="text-sm font-bold">{formatCurrency(dataPoint.price)}</p>
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
      <PriceDisplay
        price={currentPrice}
        priceChange={priceChange}
        percentageChange={percentageChange}
        direction={direction}
      />
      <ResponsiveContainer aspect={1}>
        <ChartContainer
          config={{
            stock: {
              label: "Price",
              color: "var(--color-blue-500)",
            },
          }}
        >
          <AreaChart
            data={prices}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            margin={{
              left: 6,
              right: 6,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#ccc"
              vertical={false}
            />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
              tick={{ fill: "#666", fontSize: 12, textAnchor: "end" }}
              interval={prices.length > 30 ? "preserveStartEnd" : 0}
              minTickGap={10}
              tickMargin={10}
            />
            <YAxis
              domain={[minPrice - yAxisPadding, maxPrice + yAxisPadding]}
              tickFormatter={(tick) =>
                formatCurrency(tick, { maximumFractionDigits: 2 })
              }
              tick={{ fill: "#666", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            {/* <Tooltip content={<CustomTooltip />} /> */}
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="url(#colorUv)"
              fill="url(#colorUv)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
              dot={false}
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-blue-500)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-blue-300)"
                  stopOpacity={0.4}
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

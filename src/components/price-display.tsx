"use client";
import { formatCurrency } from "@/lib/formatters";
import UpDownIcon from "./up-down-icon";

interface PriceDisplayProps {
  price: number | null;
  priceChange: number;
  percentageChange: number;
  direction: "up" | "down" | "neutral";
}
const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  priceChange,
  percentageChange,
  direction,
}) => {
  const priceChangeClass =
    priceChange > 0
      ? "text-green-500"
      : priceChange < 0
        ? "text-red-500"
        : "text-gray-700 dark:text-gray-200";
  return (
    <div className={`${priceChangeClass} flex items-center mb-4`}>
      <UpDownIcon direction={direction} />
      <p className="text-xl font-bold ml-1">{formatCurrency(price)}</p>
      {percentageChange !== 0 && (
        <span className="text-lg ml-2">({percentageChange.toFixed(2)}%)</span>
      )}
    </div>
  );
};

export default PriceDisplay;

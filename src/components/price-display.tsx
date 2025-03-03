"use client";
import { formatCurrency } from "@/lib/formatters";
import UpDownIcon from "./up-down-icon";
import NumberFlow from "@number-flow/react";

type Props = {
  price: number | null;
  priceChange: number;
  percentageChange: number;
  direction: "up" | "down" | "neutral";
  size?: "small" | "large";
};
export default function PriceDisplay({
  price,
  priceChange,
  percentageChange,
  direction,
  size = "small",
}: Props) {
  const priceChangeClass =
    priceChange > 0
      ? "text-green-500"
      : priceChange < 0
      ? "text-red-500"
      : "text-gray-700 dark:text-gray-200";
  return (
    <div className={`${priceChangeClass} flex items-center font-mono`}>
      <UpDownIcon direction={direction} />
      <p
        className={`${
          size === "small" ? "text-sm" : "text-xl"
        } font-mono font-bold ml-1`}
      >
        {price !== null && size === "small" && (
          <NumberFlow
            isolate
            value={price}
            format={{ style: "currency", currency: "USD" }}
          />
        )}
        {price != null && size === "large" && (
          <>
            {formatCurrency(price, {
              compactDisplay: "long",
              notation: "standard",
            })}
          </>
        )}
      </p>
      {percentageChange !== 0 && size === "small" && (
        <span className="text-xs ml-2">
          <NumberFlow
            format={{ style: "percent", maximumFractionDigits: 2 }}
            isolate
            value={percentageChange}
          />
        </span>
      )}
      {percentageChange !== 0 && size === "large" && (
        <span className="text-sm ml-2">
          {(percentageChange * 100).toFixed(2)}%
        </span>
      )}
    </div>
  );
}

"use client";
import { LayoutGroup, motion } from "motion/react";
import IndexTrackerCard from "./index-tracker-card";
import { use, useMemo } from "react";

type Index = {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  latestPrice: number;
  previousPrice: number | null;
};
type UpdatedData = {
  ticker: string;
  latestPrice: number;
  previousPrice: number | null;
};
type Props = {
  indicesPromise: Promise<Index[]>;
  updatedIndexData: UpdatedData[];
};

export default function IndexTrackersList({
  indicesPromise,
  updatedIndexData,
}: Props) {
  const indices = use(indicesPromise);

  const updatedIndicesMap = useMemo(
    () =>
      updatedIndexData.reduce((acc, curr) => {
        return { ...acc, [curr.ticker]: curr };
      }, {} as Record<string, { latestPrice: number; previousPrice: number | null }>),
    [updatedIndexData]
  );

  const indicesList = useMemo(
    () =>
      indices.map((index) => {
        const updatedPrice = updatedIndicesMap[index.tickerSymbol];
        const { previousPrice, latestPrice, ...rest } = index;
        return {
          ...rest,
          previousPrice:
            updatedPrice != null ? updatedPrice.previousPrice : previousPrice,
          latestPrice:
            updatedPrice != null ? updatedPrice.latestPrice : latestPrice,
        };
      }),
    [indices, updatedIndicesMap]
  );

  return (
    <LayoutGroup>
      {indicesList.map((index, i) => (
        <motion.div
          key={index.id}
          transition={{
            delay: i * 0.05,
            duration: 0.2,
            ease: "easeOut",
          }}
          initial={{ translateX: -10, opacity: 0, scale: 0.95 }}
          animate={{ translateX: 0, opacity: 1, scale: 1 }}
          exit={{ translateX: -10, opacity: 0, scale: 0.95 }}
        >
          <IndexTrackerCard key={index.id} index={index} />
        </motion.div>
      ))}
    </LayoutGroup>
  );
}

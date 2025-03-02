"use client";
import { LayoutGroup, motion } from "motion/react";
import IndexTracker from "./index-tracker";

interface Index {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  latestPrice: number | null;
  previousPrice: number | null;
}

interface IndexTrackersListProps {
  indices: Index[];
}

const IndexTrackersList: React.FC<IndexTrackersListProps> = ({ indices }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Market Indices
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <LayoutGroup>
          {indices.map((index, i) => (
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
              <IndexTracker key={index.id} index={index} />
            </motion.div>
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
};

export default IndexTrackersList;

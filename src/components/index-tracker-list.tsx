"use client";

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
        {indices.map((index) => (
          <IndexTracker key={index.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default IndexTrackersList;

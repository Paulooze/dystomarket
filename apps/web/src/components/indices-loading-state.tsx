"use client";

import { Card } from "./ui/card";

export default function IndicesLoadingState() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[0, 1, 2].map((index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-[126px]"
        />
      ))}
    </div>
  );
}

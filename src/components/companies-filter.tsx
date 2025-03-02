"use client";
import { getSectorColor } from "@/lib/formatters";
import { Sector, SubIndustry } from "@prisma/client";
import { X } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import { JSX } from "react";
import { Badge } from "./ui/badge";

type Props = {
  sectors: (Sector & { subIndustries: SubIndustry[] })[];
  selectedSector: (Sector & { subIndustries: SubIndustry[] }) | null;
  selectedSubIndustry: SubIndustry | null;
  onSelectSector: (
    sector: (Sector & { subIndustries: SubIndustry[] }) | null
  ) => void;
  onSelectSubIndustry: (subIndustry: SubIndustry | null) => void;
};

export default function CompaniesFilter({
  sectors,
  onSelectSector,
  onSelectSubIndustry,
  selectedSector,
  selectedSubIndustry,
}: Props): JSX.Element {
  return (
    <>
      <div className="flex items-center flex-wrap mb-2">
        <LayoutGroup>
          {sectors.map((sector, index) => {
            const { background, text, hover } = getSectorColor(sector.name);
            return (
              <motion.div
                key={sector.id}
                transition={{
                  delay: 0.07 * index,
                  duration: 0.2,
                  ease: "easeOut",
                }}
                initial={{ translateY: -10, opacity: 0, scale: 0.95 }}
                animate={{ translateY: 0, opacity: 1, scale: 1 }}
                exit={{ translateY: -10, opacity: 0, scale: 0.95 }}
              >
                <Badge
                  className={`${background} ${text} ${hover.text} ${
                    hover.background
                  } transition-colors duration-300 relative mr-2 mb-2 cursor-pointer text-sm py-2 ${
                    selectedSector && selectedSector.id !== sector.id
                      ? "opacity-20"
                      : ""
                  }`}
                  asChild={true}
                  onClick={() => onSelectSector(sector)}
                >
                  <button>
                    <span>{sector.name}</span>
                  </button>
                </Badge>
              </motion.div>
            );
          })}
        </LayoutGroup>
      </div>
      {selectedSector && (
        <div className="flex items-center mb-4">
          <LayoutGroup>
            {selectedSector.subIndustries.map((subIndustry, index) => {
              const { background, text, hover } = getSectorColor(
                selectedSector?.name ?? "UnknownSector"
              );

              return (
                <motion.div
                  key={subIndustry.id}
                  transition={{
                    delay: 0.07 * index,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  initial={{ translateY: -10, opacity: 0, scale: 0.95 }}
                  animate={{ translateY: 0, opacity: 1, scale: 1 }}
                  exit={{ translateY: -10, opacity: 0, scale: 0.95 }}
                >
                  <button
                    className={`${text} ${hover.text} ${background} ${
                      hover.background
                    } ${
                      hover.text
                    } px-2 rounded-md transition-colors duration-300 relative border-2 cursor-pointer text-sm py-1 mr-2 overflow-hidden ${
                      selectedSubIndustry &&
                      selectedSubIndustry.id !== subIndustry.id
                        ? "opacity-20"
                        : ""
                    }`}
                    onClick={() => {
                      onSelectSubIndustry(subIndustry);
                    }}
                  >
                    <span>{subIndustry.name}</span>
                  </button>
                </motion.div>
              );
            })}
          </LayoutGroup>
          <button
            onClick={() => {
              onSelectSector(null);
              onSelectSubIndustry(null);
            }}
            className="inline-flex items-center px-2 rounded-md border-2 cursor-pointer text-sm py-1 ml-auto"
          >
            <X />
            <span className="ml-1">Clear filter</span>
          </button>
        </div>
      )}
    </>
  );
}

"use client";
import { getSectorColor } from "@/lib/formatters";
import { Sector, SubIndustry } from "@prisma/client";
import { X } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import { useMemo, useState } from "react";
import CompanyCard from "./company-card";
import { Badge } from "./ui/badge";

interface Company {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  logoUrl: string;
  latestPrice: number | null;
  previousPrice: number | null;
  sector: Sector;
  subIndustry: SubIndustry;
}

interface CompaniesListProps {
  companies: Company[];
  sectors: (Sector & { subIndustries: SubIndustry[] })[];
}

const CompaniesList: React.FC<CompaniesListProps> = ({
  companies,
  sectors,
}) => {
  const [selectedSector, setSelectedSector] = useState<
    (Sector & { subIndustries: SubIndustry[] }) | null
  >(null);
  const [selectedSubIndustry, setSelectedSubIndustry] =
    useState<SubIndustry | null>(null);

  const handleSelectSector = (
    sector: Sector & { subIndustries: SubIndustry[] }
  ) => {
    setSelectedSubIndustry(null);
    setSelectedSector((prevSelectedSector) => {
      if (prevSelectedSector?.id === sector.id) {
        return null;
      }
      return sector;
    });
  };

  const handleSelectSubIndustry = (subIndustry: SubIndustry) => {
    setSelectedSubIndustry((prevSelectedSubIndustry) => {
      if (prevSelectedSubIndustry?.id === subIndustry.id) {
        return null;
      }
      return subIndustry;
    });
  };

  const filteredCompanies = useMemo(
    () =>
      companies.filter((company) => {
        if (!selectedSector) {
          return true;
        }
        if (!selectedSubIndustry) {
          return company.sector.id === selectedSector.id;
        }
        return (
          company.sector.id === selectedSector.id &&
          company.subIndustry.id === selectedSubIndustry?.id
        );
      }),
    [selectedSector, companies, selectedSubIndustry]
  );

  return (
    <div>
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
                  onClick={() => handleSelectSector(sector)}
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
                      handleSelectSubIndustry(subIndustry);
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
              setSelectedSector(null);
              setSelectedSubIndustry(null);
            }}
            className="inline-flex items-center px-2 rounded-md border-2 cursor-pointer text-sm py-1 ml-auto"
          >
            <X />
            <span className="ml-1">Clear filter</span>
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <LayoutGroup>
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              transition={{
                delay: index * 0.05,
                duration: 0.2,
                ease: "easeOut",
              }}
              initial={{ translateX: -10, opacity: 0, scale: 0.95 }}
              animate={{ translateX: 0, opacity: 1, scale: 1 }}
              exit={{ translateX: -10, opacity: 0, scale: 0.95 }}
            >
              <CompanyCard key={company.id} company={company} />
            </motion.div>
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
};

export default CompaniesList;

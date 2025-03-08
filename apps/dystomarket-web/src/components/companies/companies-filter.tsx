import { X } from 'lucide-react';
import { LayoutGroup, motion } from 'motion/react';
import { JSX } from 'react';
import {
  fetchSectors,
  getSectorColor,
  Sector,
  shortenSectorName,
  shortenSubIndustryName,
  SubIndustry,
} from './companies.helpers';
import { useSuspenseQuery } from '@tanstack/react-query';

type Props = {
  selectedSector: (Sector & { subIndustries: SubIndustry[] }) | null;
  selectedSubIndustry: SubIndustry | null;
  onSelectSector: (
    sector: (Sector & { subIndustries: SubIndustry[] }) | null,
  ) => void;
  onSelectSubIndustry: (subIndustry: SubIndustry | null) => void;
};

export default function CompaniesFilter({
  onSelectSector,
  onSelectSubIndustry,
  selectedSector,
  selectedSubIndustry,
}: Props): JSX.Element {
  const { data: sectors } = useSuspenseQuery({
    queryKey: ['sectors'],
    queryFn: fetchSectors,
  });
  return (
    <>
      <h3 className="mb-2">Filter by sectors & sub industries:</h3>
      <div className="flex items-center flex-wrap mb-2">
        <LayoutGroup>
          {sectors.map((sector, index) => {
            const { background, text, hover, active } = getSectorColor(
              sector.name,
            );
            return (
              <motion.div
                key={sector.id}
                transition={{
                  delay: 0.07 * index,
                  duration: 0.2,
                  ease: 'easeOut',
                }}
                initial={{ translateY: -10, opacity: 0, scale: 0.95 }}
                animate={{ translateY: 0, opacity: 1, scale: 1 }}
                exit={{ translateY: -10, opacity: 0, scale: 0.95 }}
              >
                <button
                  className={`${background} ${text} ${hover.text} ${
                    hover.background
                  } transition-colors duration-300 relative mr-2 mb-2 cursor-pointer text-sm px-2 py-1 inline-flex rounded-md ${
                    selectedSector && selectedSector.id !== sector.id
                      ? 'opacity-20'
                      : ''
                  } ${
                    selectedSector?.id === sector.id
                      ? `${active.background} ${active.text}`
                      : ''
                  }`}
                  onClick={() => onSelectSector(sector)}
                >
                  <span>{shortenSectorName(sector.name)}</span>
                </button>
              </motion.div>
            );
          })}
        </LayoutGroup>
      </div>
      {selectedSector && (
        <div className="flex items-start mb-2">
          <div className="flex items-center flex-wrap flex-1">
            <LayoutGroup>
              {selectedSector.subIndustries.map((subIndustry, index) => {
                const { background, text, hover, active } = getSectorColor(
                  selectedSector?.name ?? 'UnknownSector',
                );

                return (
                  <motion.div
                    key={subIndustry.id}
                    transition={{
                      delay: 0.07 * index,
                      duration: 0.2,
                      ease: 'easeOut',
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
                      } px-2 rounded-md transition-colors duration-300 relative cursor-pointer text-sm py-1 mr-2 mb-2 overflow-hidden ${
                        selectedSubIndustry &&
                        selectedSubIndustry.id !== subIndustry.id
                          ? 'opacity-20'
                          : ''
                      } ${
                        selectedSubIndustry?.id === subIndustry.id
                          ? `${active.background} ${active.text}`
                          : ''
                      }`}
                      onClick={() => {
                        onSelectSubIndustry(subIndustry);
                      }}
                    >
                      <span>{shortenSubIndustryName(subIndustry.name)}</span>
                    </button>
                  </motion.div>
                );
              })}
            </LayoutGroup>
          </div>
          <button
            onClick={() => {
              onSelectSector(null);
              onSelectSubIndustry(null);
            }}
            className="inline-flex items-center px-2 rounded-md cursor-pointer text-sm py-0.5 ml-auto"
          >
            <X />
            <span className="ml-1">Clear filter</span>
          </button>
        </div>
      )}
    </>
  );
}

interface FormatCurrencyOptions {
  currency?: string; // e.g., 'USD', 'EUR', 'JPY'
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  compactDisplay?: Intl.NumberFormatOptions["compactDisplay"];
  notation?: Intl.NumberFormatOptions["notation"];
}

export function formatCurrency(
  value: number | null | undefined,
  options: FormatCurrencyOptions = {}
): string {
  const {
    currency = "USD",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    compactDisplay = "short",
    notation = "compact",
  } = options;

  if (value === null || value === undefined) {
    return "N/A"; // Or your preferred placeholder
  }

  try {
    const formatter = new Intl.NumberFormat("en-US", {
      // Or your preferred locale
      style: "currency",
      currency,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
      compactDisplay,
      notation,
    });

    return formatter.format(value);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return "N/A"; // Fallback in case of error
  }
}
type Colors = {
  text: string;
  border: string;
  background?: string;
  hover: { background: string; text: string; border: string };
};
export const sectorColors: Record<string, Colors> = {
  Energy: {
    text: "text-yellow-600",
    border: "border-bg-yellow-600",
    // text: "text-black",
    hover: {
      // text: "hover:text-yellow-500",
      background: "hover:bg-yellow-500",
      border: "border-hover:bg-yellow-500",
      text: "hover:text-black",
    },
  },
  Materials: {
    text: "text-amber-600",
    border: "border-bg-amber-600",
    // text: "text-white",
    hover: {
      // text: "hover:text-amber-600",
      background: "hover:bg-amber-600",
      border: "border-hover:bg-amber-600",
      text: "hover:text-white",
    },
  },
  Industrials: {
    text: "text-gray-200",
    border: "border-bg-gray-600",
    // text: "text-white",
    hover: {
      // text: "hover:text-gray-300",
      background: "hover:bg-gray-100",
      border: "border-hover:bg-gray-600",
      text: "hover:text-white",
    },
  },
  "Consumer Discretionary": {
    text: "text-pink-500",
    border: "border-bg-pink-600",
    // text: "text-dysto-dark",
    hover: {
      // text: "hover:text-pink-600",
      background: "hover:bg-pink-600",
      border: "border-hover:bg-pink-600",
      text: "hover:text-white",
    },
  },
  "Consumer Staples": {
    text: "text-orange-600",
    border: "border-bg-orange-600",
    // text: "text-black",
    hover: {
      // text: "hover:text-orange-500",
      background: "hover:bg-orange-500",
      border: "border-hover:bg-orange-500",
      text: "hover:text-black",
    },
  },
  "Health Care": {
    text: "text-red-500",
    border: "border-bg-red-500",
    // text: "text-white",
    hover: {
      // text: "hover:text-red-500",
      background: "hover:bg-red-500",
      border: "border-hover:bg-red-500",
      text: "hover:text-white",
    },
  },
  Financials: {
    text: "text-green-600",
    border: "border-bg-green-600",
    // text: "text-black",
    hover: {
      // text: "hover:text-green-500",
      background: "hover:bg-green-500",
      border: "border-hover:bg-green-500",
      text: "hover:text-black",
    },
  },
  "Information Technology": {
    text: "text-blue-600",
    border: "border-bg-blue-600",
    // text: "text-white",
    hover: {
      // text: "hover:text-blue-600",
      background: "hover:bg-blue-600",
      border: "border-hover:bg-blue-600",
      text: "hover:text-white",
    },
  },
  "Communication Services": {
    text: "text-indigo-600",
    border: "border-bg-indigo-600",
    // text: "text-white",
    hover: {
      // text: "hover:text-indigo-600",
      background: "hover:bg-indigo-600",
      border: "border-hover:bg-indigo-600",
      text: "hover:text-white",
    },
  },
  Utilities: {
    text: "text-cyan-600",
    border: "border-bg-cyan-600",
    // text: "text-black",
    hover: {
      // text: "hover:text-cyan-500",
      background: "hover:bg-cyan-500",
      border: "border-hover:bg-cyan-500",
      text: "hover:text-black",
    },
  },
  "Real Estate": {
    text: "text-purple-600",
    border: "border-bg-purple-600",
    // text: "text-white",
    hover: {
      // text: "hover:text-purple-600",
      background: "hover:bg-purple-600",
      border: "border-hover:bg-purple-600",
      text: "hover:text-white",
    },
  },
  UnknownSector: {
    text: "text-gray-500",
    border: "border-bg-gray-500",
    // text: "text-gray-500",
    hover: {
      // text: "hover:text-gray-400",
      background: "hover:bg-gray-400",
      border: "border-hover:bg-gray-400",
      text: "hover:text-gray-500",
      // background: "hover:bg-gray-500",
    },
  },
};

export function getSectorColor(sector: string): Colors {
  return sectorColors[sector] ?? sectorColors.UnknownSector;
}

const sectorMapping = {
  "Consumer Discretionary": "Cons. Disc.",
  "Consumer Staples": "Cons. Staples",
  "Information Technology": "InfoTech",
  "Health Care": "Health",
  Financials: "Finance",
  Industrials: "Indust.",
  "Communication Services": "Comm. Services",
  Materials: "Materials",
  Utilities: "Utilities",
  "Real Estate": "Real Est.",
  Energy: "Energy",
};

export const subIndustryMapping = {
  "Hotels, Restaurants & Leisure": "Hotels & Leisure",
  "Food & Staples Retailing": "Food Retail",
  "Food Products": "Food",
  Beverages: "Drinks",
  Biotechnology: "Biotech",
  Pharmaceuticals: "Pharma",
  "Health Care Equipment & Supplies": "Equip. & Supplies",
  "Software & Services": "Software",
  "Technology Hardware & Equipment": "Tech Hardware",
  Semiconductors: "Chips",
  "Diversified Financials": "Diversified",
  "Aerospace & Defense": "Aero & Def.",
  Machinery: "Machines",
  Transportation: "Transport",
  "Electric Utilities": "Electric",
  "Gas Utilities": "Gas",
  "Water Utilities": "Water",
  "Media & Entertainment": "Media",
  "Real Estate Management & Development": "Real Est. Dev.",
};

function ensureSectorKey(value: string): keyof typeof sectorMapping {
  return value as keyof typeof sectorMapping;
}
function ensureSubIndustryKey(value: string): keyof typeof subIndustryMapping {
  return value as keyof typeof subIndustryMapping;
}

export function shortenSectorName(sector: string): string {
  return sectorMapping[ensureSectorKey(sector)] ?? sector;
}

export function shortenSubIndustryName(subIndustry: string): string {
  return subIndustryMapping[ensureSubIndustryKey(subIndustry)] ?? subIndustry;
}

export function shortenLabel(sector: string, subIndustry: string) {
  const shortSector = sectorMapping[ensureSectorKey(sector)] ?? sector; // Default to original if no match
  const shortSubIndustry =
    subIndustryMapping[ensureSubIndustryKey(subIndustry)] ?? subIndustry; // Default to original

  return `${shortSector} / ${shortSubIndustry}`;
}

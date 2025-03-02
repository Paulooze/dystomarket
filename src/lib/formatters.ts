interface FormatCurrencyOptions {
  currency?: string; // e.g., 'USD', 'EUR', 'JPY'
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export function formatCurrency(
  value: number | null | undefined,
  options: FormatCurrencyOptions = {}
): string {
  const {
    currency = "USD",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  if (value === null || value === undefined) {
    return "N/A"; // Or your preferred placeholder
  }

  try {
    const formatter = new Intl.NumberFormat("en-US", {
      // Or your preferred locale
      style: "currency",
      currency: currency,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
    });

    return formatter.format(value);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return "N/A"; // Fallback in case of error
  }
}
type Colors = {
  background: string;
  border: string;
  text: string;
  hover: { background: string; text: string; border: string };
};
export const sectorColors: Record<string, Colors> = {
  Energy: {
    background: "bg-yellow-600",
    border: "border-bg-yellow-600",
    text: "text-black",
    hover: {
      background: "hover:bg-yellow-500",
      border: "border-hover:bg-yellow-500",
      text: "hover:text-black",
    },
  },
  Materials: {
    background: "bg-amber-700",
    border: "border-bg-amber-700",
    text: "text-white",
    hover: {
      background: "hover:bg-amber-600",
      border: "border-hover:bg-amber-600",
      text: "hover:text-white",
    },
  },
  Industrials: {
    background: "bg-gray-700",
    border: "border-bg-gray-700",
    text: "text-white",
    hover: {
      background: "hover:bg-gray-600",
      border: "border-hover:bg-gray-600",
      text: "hover:text-white",
    },
  },
  "Consumer Discretionary": {
    background: "bg-pink-700",
    border: "border-bg-pink-700",
    text: "text-white",
    hover: {
      background: "hover:bg-pink-600",
      border: "border-hover:bg-pink-600",
      text: "hover:text-white",
    },
  },
  "Consumer Staples": {
    background: "bg-orange-600",
    border: "border-bg-orange-600",
    text: "text-black",
    hover: {
      background: "hover:bg-orange-500",
      border: "border-hover:bg-orange-500",
      text: "hover:text-black",
    },
  },
  "Health Care": {
    background: "bg-red-600",
    border: "border-bg-red-600",
    text: "text-white",
    hover: {
      background: "hover:bg-red-500",
      border: "border-hover:bg-red-500",
      text: "hover:text-white",
    },
  },
  Financials: {
    background: "bg-green-600",
    border: "border-bg-green-600",
    text: "text-black",
    hover: {
      background: "hover:bg-green-500",
      border: "border-hover:bg-green-500",
      text: "hover:text-black",
    },
  },
  "Information Technology": {
    background: "bg-blue-700",
    border: "border-bg-blue-700",
    text: "text-white",
    hover: {
      background: "hover:bg-blue-600",
      border: "border-hover:bg-blue-600",
      text: "hover:text-white",
    },
  },
  "Communication Services": {
    background: "bg-indigo-700",
    border: "border-bg-indigo-700",
    text: "text-white",
    hover: {
      background: "hover:bg-indigo-600",
      border: "border-hover:bg-indigo-600",
      text: "hover:text-white",
    },
  },
  Utilities: {
    background: "bg-cyan-600",
    border: "border-bg-cyan-600",
    text: "text-black",
    hover: {
      background: "hover:bg-cyan-500",
      border: "border-hover:bg-cyan-500",
      text: "hover:text-black",
    },
  },
  "Real Estate": {
    background: "bg-purple-700",
    border: "border-bg-purple-700",
    text: "text-white",
    hover: {
      background: "hover:bg-purple-600",
      border: "border-hover:bg-purple-600",
      text: "hover:text-white",
    },
  },
  UnknownSector: {
    background: "bg-gray-500",
    border: "border-bg-gray-500",
    text: "bg-gray-500",
    hover: {
      background: "hover:bg-gray-400",
      border: "border-hover:bg-gray-400",
      text: "hover:bg-gray-500",
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

export function shortenLabel(sector: string, subIndustry: string) {
  const shortSector = sectorMapping[ensureSectorKey(sector)] ?? sector; // Default to original if no match
  const shortSubIndustry =
    subIndustryMapping[ensureSubIndustryKey(subIndustry)] ?? subIndustry; // Default to original

  return `${shortSector} / ${shortSubIndustry}`;
}

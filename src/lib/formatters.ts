import { SubIndustry } from "@prisma/client";

export function formatSubIndustry(subIndustry: SubIndustry): string {
  switch (subIndustry) {
    // Energy
    case SubIndustry.EnergyEquipmentServices:
      return "Energy Equipment & Services";
    case SubIndustry.OilGasConsumableFuels:
      return "Oil, Gas & Consumable Fuels";

    // Materials
    case SubIndustry.Chemicals:
      return "Chemicals";
    case SubIndustry.MetalsMining:
      return "Metals & Mining";

    // Industrials
    case SubIndustry.AerospaceDefense:
      return "Aerospace & Defense";
    case SubIndustry.Machinery:
      return "Machinery";
    case SubIndustry.Transportation:
      return "Transportation";

    // Consumer Discretionary
    case SubIndustry.Automobiles:
      return "Automobiles";
    case SubIndustry.HotelsRestaurantsLeisure:
      return "Hotels, Restaurants & Leisure";
    case SubIndustry.Media:
      return "Media";

    // Consumer Staples
    case SubIndustry.FoodStaplesRetailing:
      return "Food & Staples Retailing";
    case SubIndustry.FoodProducts:
      return "Food Products";
    case SubIndustry.Beverages:
      return "Beverages";

    // Health Care
    case SubIndustry.Pharmaceuticals:
      return "Pharmaceuticals";
    case SubIndustry.Biotechnology:
      return "Biotechnology";
    case SubIndustry.HealthCareEquipmentSupplies:
      return "Health Care Equipment & Supplies";

    // Financials
    case SubIndustry.Banks:
      return "Banks";
    case SubIndustry.DiversifiedFinancials:
      return "Diversified Financials";
    case SubIndustry.Insurance:
      return "Insurance";

    // Information Technology
    case SubIndustry.SoftwareServices:
      return "Software & Services";
    case SubIndustry.TechnologyHardwareEquipment:
      return "Technology Hardware & Equipment";
    case SubIndustry.Semiconductors:
      return "Semiconductors";

    // Communication Services
    case SubIndustry.TelecommunicationServices:
      return "Telecommunication Services";
    case SubIndustry.MediaEntertainment:
      return "Media & Entertainment";

    // Utilities
    case SubIndustry.ElectricUtilities:
      return "Electric Utilities";
    case SubIndustry.GasUtilities:
      return "Gas Utilities";
    case SubIndustry.WaterUtilities:
      return "Water Utilities";

    // Real Estate
    case SubIndustry.RealEstateManagementDevelopment:
      return "Real Estate Management & Development";

    default:
      return "Unknown Sub-Industry"; // Always have a default case
  }
}

// Similar function for Sector (if you want to format those too)
import { Sector } from "@prisma/client";

export function formatSector(sector: Sector): keyof typeof sectorMapping {
  switch (sector) {
    case Sector.Energy:
      return "Energy";
    case Sector.Materials:
      return "Materials";
    case Sector.Industrials:
      return "Industrials";
    case Sector.ConsumerDiscretionary:
      return "Consumer Discretionary";
    case Sector.ConsumerStaples:
      return "Consumer Staples";
    case Sector.HealthCare:
      return "Health Care";
    case Sector.Financials:
      return "Financials";
    case Sector.InformationTechnology:
      return "Information Technology";
    case Sector.CommunicationServices:
      return "Communication Services";
    case Sector.Utilities:
      return "Utilities";
    case Sector.RealEstate:
      return "Real Estate";
  }
}

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

export const sectorColors: Record<
  string,
  { background: string; text: string }
> = {
  Energy: {
    background: "bg-yellow-600",
    text: "text-black",
  },
  Materials: {
    background: "bg-amber-700",
    text: "text-white",
  },
  Industrials: {
    background: "bg-gray-700",
    text: "text-white",
  },
  ConsumerDiscretionary: {
    background: "bg-pink-700",
    text: "text-white",
  },
  ConsumerStaples: {
    background: "bg-orange-600",
    text: "text-black",
  },
  HealthCare: {
    background: "bg-red-600",
    text: "text-white",
  },
  Financials: {
    background: "bg-green-600",
    text: "text-black",
  },
  InformationTechnology: {
    background: "bg-blue-700",
    text: "text-white",
  },
  CommunicationServices: {
    background: "bg-indigo-700",
    text: "text-white",
  },
  Utilities: {
    background: "bg-cyan-600",
    text: "text-black",
  },
  RealEstate: {
    background: "bg-purple-700",
    text: "text-white",
  },
  UnknownSector: {
    background: "bg-gray-500",
    text: "bg-gray-500",
  },
};

export function getSectorColor(sector: Sector): {
  background: string;
  text: string;
} {
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

export function shortenLabel(
  sector: keyof typeof sectorMapping,
  subIndustry: keyof typeof subIndustryMapping
) {
  const shortSector = sectorMapping[sector] ?? sector; // Default to original if no match
  const shortSubIndustry = subIndustryMapping[subIndustry] ?? subIndustry; // Default to original

  return `${shortSector} / ${shortSubIndustry}`;
}

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

export function formatSector(sector: Sector): string {
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
    default:
      return "Unknown Sector";
  }
}

interface FormatCurrencyOptions {
  currency?: string; // e.g., 'USD', 'EUR', 'JPY'
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export function formatCurrency(
  value: number | null | undefined,
  options: FormatCurrencyOptions = {},
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

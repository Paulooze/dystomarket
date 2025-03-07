type FormatCurrencyOptions = {
  currency?: string; // e.g., 'USD', 'EUR', 'JPY'
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  compactDisplay?: Intl.NumberFormatOptions['compactDisplay'];
  notation?: Intl.NumberFormatOptions['notation'];
};

export function formatCurrency(
  value: number | null | undefined,
  options: FormatCurrencyOptions = {},
): string {
  const {
    currency = 'USD',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    compactDisplay = 'short',
    notation = 'compact',
  } = options;

  if (value === null || value === undefined) {
    return 'N/A'; // Or your preferred placeholder
  }

  try {
    const formatter = new Intl.NumberFormat('en-US', {
      // Or your preferred locale
      style: 'currency',
      currency,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
      compactDisplay,
      notation,
    });

    return formatter.format(value);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return 'N/A'; // Fallback in case of error
  }
}

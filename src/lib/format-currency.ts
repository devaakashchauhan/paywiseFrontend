export const formatCurrency = (
  value: number,
  options: {
    currency?: string;
    decimalPlaces?: number;
    compact?: boolean;
    showSign?: boolean;
    isExpense?: boolean;
    style?: "decimal" | "percent" | "currency";
  } = {}
): string => {
  const {
    currency = "INR",
    decimalPlaces = 2,
    compact = false,
    showSign = false,
    isExpense = false,
    style = "currency",
  } = options;

  const displayValue = isExpense ? -Math.abs(value) : value;

  return new Intl.NumberFormat("en-US", {
    style: style,
    currency,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    notation: compact ? "compact" : "standard",
    //signDisplay: showSign  ? 'always' : isExpense ? 'always' : 'auto',
    signDisplay: showSign ? "always" : "auto",
  }).format(displayValue);
};

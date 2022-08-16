const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

const formatNumberToCurrency = (number) => {
  const currency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);

  return currency;
};

export default formatNumberToCurrency;

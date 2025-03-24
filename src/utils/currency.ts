export const formatPrice = (price: number): string => {
  return `₹${price.toFixed(2)}`;
};

export const convertToINR = (usdPrice: number): number => {
  return Math.round(usdPrice * 83); // Using approximate USD to INR conversion
};
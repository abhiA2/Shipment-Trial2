const calculateFee = ({
  actualWeight,
  length,
  breadth,
  height,
  shippingPartnerId,
  shipmentModeId,
}) => {
  let pricePerKg = 0;
  let taxRate = 18;
  let fixedCost = 0;
  if (shippingPartnerId === 1) {
    pricePerKg = 900;
    fixedCost = 300;
  } else {
    pricePerKg = 950;
    fixedCost = 500;
  }
  const logisticFee = actualWeight * pricePerKg;
  const tax = logisticFee * (taxRate / 100);
  const total = logisticFee + tax;
  return {
    logisticFee,
    tax,
    total,
    billedWeight: actualWeight,
  };
};

module.exports = calculateFee;

import { ICartItem } from "../models/сartItem";

export function calculateTotalTenPercentDiscount(cartItems: ICartItem[]) {
  
  const totalQuantity = cartItems.reduce((sum, it) => sum + it.quantity, 0);
  if (totalQuantity === 0) {
    return { totalPrice: 0, totalQuantity: 0, discountAmount: 0 };
  }

    const expandedUnits: number[] = [];

    cartItems.forEach(item => {
    for (let i = 0; i < item.quantity; i++) {
        expandedUnits.push(item.product.price);
    }
    });

  const totalSum = expandedUnits.reduce((sum, price) => sum + price, 0);
  
  if (totalQuantity < 5) {
    return { totalPrice: totalSum, totalQuantity, discountAmount: 0 };
  }

  expandedUnits.sort((a, b) => a - b);
  const discountSum = expandedUnits.slice(0, 5).reduce((sum, price) => sum + price, 0);

  const discountAmount = +(discountSum * 0.1).toFixed(2);
  const totalPrice = totalSum - discountAmount;

  return { totalPrice, totalQuantity, discountAmount };
}

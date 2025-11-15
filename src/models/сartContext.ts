import type { IProduct } from "./products";
import type { ICartItem } from "./сartItem";

export interface ICartContextType {
  cartItems: ICartItem[];
  addToCart: (product: IProduct) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
}

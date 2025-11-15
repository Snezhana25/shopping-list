import type { IProduct } from "./products";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
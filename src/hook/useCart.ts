import { useContext } from "react";
import { ICartContextType } from "../models/сartContext";
import { CartContext } from "../context/сartContext";

export function useCart(): ICartContextType {
  const context = useContext(CartContext);
  if (!context) throw new Error("use CartProvider");
  return context;
}
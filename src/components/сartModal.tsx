import React, { useMemo, useState } from "react";
import { calculateTotalTenPercentDiscount } from "../utils/discount";
import { useCart } from "../hook/useCart";

export default function CartModal(): JSX.Element {
  const { cartItems, updateQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const { totalPrice, totalQuantity, discountAmount } = useMemo(
    () => calculateTotalTenPercentDiscount(cartItems),
    [cartItems]
  );

  const originalTotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, it) => sum + Number(it.product.price) * it.quantity,
        0
      ),
    [cartItems]
  );

  const discount = 10;

  return (
    <>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className="fixed top-6 right-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded z-50"
      >
        Cart ({totalQuantity})
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-40">
          <div className="bg-white w-11/12 max-w-lg rounded-lg p-6 relative">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Cart is empty</p>
            ) : (
              <ul className="space-y-4 max-h-96 overflow-y-auto">
                {cartItems.map((item) => {
                  const price = Number(item.product.price);
                  const quantity = item.quantity;
                  const itemTotal = price * quantity;

                  return (
                    <li
                      key={item.product.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.product.title}</p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <span>${price}</span>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, quantity - 1)
                              }
                              className="h-8 w-8 flex items-center justify-center border rounded bg-white hover:bg-gray-100"
                              aria-label={`Decrease quantity for ${item.product.title}`}
                            >
                              –
                            </button>

                            <span className="min-w-[24px] text-center font-medium">
                              {quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, quantity + 1)
                              }
                              className="h-8 w-8 flex items-center justify-center border rounded bg-white hover:bg-gray-100"
                              aria-label={`Increase quantity for ${item.product.title}`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">${itemTotal.toFixed(2)}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="mt-4 flex justify-between font-bold text-lg">
              <span>Items:</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <div className="font-bold text-lg">Total:</div>
              <div className="text-right">
                {discountAmount > 0 && (
                  <div className="text-green-600 text-sm">
                    -{discount}% applied (${discountAmount.toFixed(2)})
                  </div>
                )}
                <div className="font-semibold text-xl">
                  ${totalPrice.toFixed(2)}
                </div>
                {discountAmount > 0 && (
                  <div className="text-sm text-gray-500">
                    Was: ${originalTotal.toFixed(2)}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

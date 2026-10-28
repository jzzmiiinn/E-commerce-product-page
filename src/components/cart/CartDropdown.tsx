import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartDropdown = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleRemove = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id },
    });
  };

  const handleCheckout = () => {
    if (state.items.length === 0) return;

    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsCartOpen((open) => !open)}
        aria-label="Toggle shopping cart"
        aria-expanded={isCartOpen}
        className="relative rounded-md p-2 hover:bg-gray-100"
      >
        <img src="/icon-cart.svg" alt="" className="h-6 w-6" />

        {totalItems > 0 && (
          <span className="absolute -right-1 -top-1 rounded-full bg-orange-500 px-2 text-xs font-bold text-white">
            {totalItems}
          </span>
        )}
      </button>

      {isCartOpen && (
        <div className="absolute right-0 top-12 z-50 w-80 max-w-[calc(100vw-2rem)] rounded-lg bg-white shadow-xl ring-1 ring-black/5 sm:w-96">
          <h2 className="border-b border-gray-200 px-6 py-5 font-bold text-gray-900">
            Cart
          </h2>

          {state.items.length === 0 ? (
            <p className="px-6 py-12 text-center font-bold text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-5 p-6">
              {state.items.map((item) => (
                <CartItem key={item.id} item={item} onRemove={handleRemove} />
              ))}

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-medium text-gray-500">Total</span>
                <span className="text-lg font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={state.items.length === 0}
                className="w-full rounded-lg bg-orange-500 px-6 py-4 font-bold text-gray-900 transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

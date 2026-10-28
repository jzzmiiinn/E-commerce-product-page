import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const { state, dispatch } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = () => {
    if (state.items.length === 0) return;

    dispatch({ type: "CLEAR_CART" });
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
            ✓
          </div>

          <h1 className="mb-3 text-2xl font-bold text-gray-900">
            Order confirmed!
          </h1>

          <p className="mb-6 text-gray-500">
            Your demo order has been placed successfully.
          </p>

          <Link
            to="/"
            className="block w-full rounded-lg bg-orange-500 px-6 py-4 font-bold text-gray-900 transition hover:opacity-75"
          >
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="text-sm font-medium text-gray-600 hover:text-orange-500"
        >
          ← Back to shopping
        </Link>

        <h1 className="mb-8 mt-6 text-3xl font-bold text-gray-900">Checkout</h1>

        {state.items.length === 0 ? (
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <img
              src="/icon-cart.svg"
              alt=""
              className="mx-auto mb-5 h-10 w-10 opacity-40"
            />

            <h2 className="mb-2 text-xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mb-6 text-gray-500">
              Add some sneakers before proceeding to checkout.
            </p>

            <Link
              to="/"
              className="inline-block rounded-lg bg-orange-500 px-6 py-4 font-bold text-gray-900 hover:opacity-75"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[1fr_280px]">
            <section className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-bold text-gray-900">
                Order summary
              </h2>

              <div className="space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-medium text-gray-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                    </div>

                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: { id: item.id },
                        })
                      }
                      aria-label={`Remove ${item.name}`}
                      className="rounded p-2 hover:bg-gray-100"
                    >
                      <img src="/icon-delete.svg" alt="" className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-bold text-gray-900">
                Order total
              </h2>

              <div className="mb-4 flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="mb-5 flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="mb-6 flex justify-between border-t border-gray-200 pt-4">
                <span className="font-bold text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full rounded-lg bg-orange-500 px-5 py-4 font-bold text-gray-900 transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Place Order
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Demo checkout — no payment will be processed.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

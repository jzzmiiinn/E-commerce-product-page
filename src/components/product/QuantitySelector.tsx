import { useState } from "react";

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 sm:w-36">
      <button
        type="button"
        onClick={decreaseQuantity}
        disabled={quantity === 1}
        aria-label="Decrease quantity"
        className="text-2xl font-bold text-orange-500 transition hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>

      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(event) => {
          const value = Number(event.target.value);
          if (value >= 1) setQuantity(value);
        }}
        aria-label="Quantity"
        className="w-12 bg-transparent text-center font-bold outline-none"
      />

      <button
        type="button"
        onClick={increaseQuantity}
        aria-label="Increase quantity"
        className="text-2xl font-bold text-orange-500 transition hover:opacity-60"
      >
        +
      </button>
    </div>
  );
};

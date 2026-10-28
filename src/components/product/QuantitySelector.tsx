type QuantitySelectorProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

export const QuantitySelector = ({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 sm:w-36">
      <button
        type="button"
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
        disabled={quantity === 1}
        aria-label="Decrease quantity"
        className="text-2xl font-bold text-orange-500 hover:opacity-60 disabled:opacity-40"
      >
        −
      </button>

      <span className="font-bold" aria-live="polite">
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => onQuantityChange(quantity + 1)}
        aria-label="Increase quantity"
        className="text-2xl font-bold text-orange-500 hover:opacity-60"
      >
        +
      </button>
    </div>
  );
};

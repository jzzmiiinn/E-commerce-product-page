import type { CartItem as CartItemType } from "../../types/cart";

type CartItemProps = {
  item: CartItemType;
  onRemove: (id: string) => void;
};

export const CartItem = ({ item, onRemove }: CartItemProps) => {
  const subtotal = item.price * item.quantity;

  return (
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-12 w-12 rounded-md object-cover"
      />

      <div className="min-w-0 flex-1 text-sm text-gray-500">
        <p className="truncate">{item.name}</p>

        <p>
          ${item.price.toFixed(2)} × {item.quantity}{" "}
          <span className="font-bold text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
        className="rounded p-2 hover:bg-gray-100"
      >
        <img src="/icon-delete.svg" alt="" className="h-4 w-4" />
      </button>
    </div>
  );
};

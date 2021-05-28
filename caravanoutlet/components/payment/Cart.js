import { useCartState } from "../../context/cart";
import { useModalDispatch } from "../../context/modal";

import CartItem from "./CartItem";

export default function Cart() {
  const { line_items, subtotal, total_unique_items } = useCartState();
  const { showCheckout } = useModalDispatch();

  const isEmpty = line_items.length === 0;

  return (
    <div>
      <div>
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div>
        {isEmpty ? (
          <p>Handlekurven din er tom</p>
        ) : (
          <>
            <div>
              Totalpris: {subtotal?.formatted_with_symbol}, {total_unique_items}{" "}
              {total_unique_items === 1 ? "item" : "items"}
            </div>
            <div>
              <button
                onClick={showCheckout}
              >
                Betal
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

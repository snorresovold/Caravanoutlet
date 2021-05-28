import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";

function CartItem({ id, media, name, quantity, line_total, selected_options }) {
  const { setCart } = useCartDispatch();
  const hasVariants = selected_options.length >= 1;

  const handleUpdateCart = ({ cart }) => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart
      .remove(id)
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        toast(
          `${name} har blit fjernet fra handlekurven din. Totalprisen din er nå: ${subtotal.formatted_with_symbol}`
        )
      );

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
          .then(({ subtotal }) =>
            toast(
              `1 "${name}" har blit fjernet fra handlekurven din. Totalprisen din er nå: ${subtotal.formatted_with_symbol}`
            )
          )
      : handleRemoveItem();
  };

  const incrementQuantity = () =>
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        toast(
          `Enda en "${name}" har blitt lagt i handlekurven din, Totalprisen din er nå: ${subtotal.formatted_with_symbol}`
        )
      );

  return (
    <div>
      <div>
        <Image
          src={media.source}
          alt={name}
          layout="fill"
          loading="eager"
          priority={true}
        />
      </div>
      <div>
        <div>
          <p>
            {name}
          </p>
          {hasVariants && (
            <p>
              {selected_options.map(({ option_name }, index) => (
                <React.Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        <div>
          <div>
            {line_total.formatted_with_symbol}
          </div>
          <div>
            <div>
              <span>Quantity:</span>
              <button
                onClick={decrementQuantity}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={handleRemoveItem}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

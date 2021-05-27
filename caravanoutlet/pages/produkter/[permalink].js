import React from "react";
import { toast } from "react-toastify";

import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart"
import { useModalDispatch } from "../../context/modal"

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  const { openModal } = useModalDispatch();
  const { setCart } = useCartDispatch()

  const addToCart = () =>
  commerce.cart
    .add(product.id, 1)
    .then(({ cart }) => {
      setCart(cart);

      return cart;
    })
    .then(({ subtotal }) =>
      toast(
        `${product.name} Er i handlekurven din. Total-prisen din er nå ${subtotal.formatted_with_symbol}. Click for å se hva som er i handlekurven din.`,
        {
          onClick: openModal,
        }
      )
    )


  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
      <button onClick={addToCart}>Legg i handlekurv</button>
    </React.Fragment>
  );
}

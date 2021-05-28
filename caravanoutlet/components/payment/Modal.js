import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { useModalState, useModalDispatch } from "../../context/modal";
import { useCheckoutDispatch } from "../../context/checkout";
import { useCartState } from "../../context/cart";

import Breadcrumbs from "./Breadcrumbs";
import Cart from "./Cart";
import Checkout from "./checkout/index.js";

function CurrentStep({ step }) {
  const { id } = useCartState();

  switch (step) {
    case "cart":
      return <Cart />;
    case "checkout":
      return <Checkout cartId={id} />;
    default:
      return null;
  }
}

function Modal() {
  const { open, step } = useModalState();
  const { closeModal } = useModalDispatch();
  const { reset: resetCheckout } = useCheckoutDispatch();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", closeModal);

    return () => {
      router.events.off("routeChangeStart", closeModal);
    };
  }, []);

  const closeAndResetModal = () => {
    closeModal();
    resetCheckout();
  };

  return (
    <div>
      {open && (
          <div>
            <div>
              <div>
                <Breadcrumbs inCart={step === "cart"} />

                <button
                  onClick={closeAndResetModal}
                >
                  Close
                </button>
              </div>
            </div>
            <CurrentStep step={step} />
          </div>
      )}
    </div>
  );
}

export default Modal;

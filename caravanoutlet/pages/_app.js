import Layout from '../components/Layout/Layout'

import '../styles/globals.css'

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../context/theme";
import { ModalProvider } from "../context/modal";
import { CartProvider } from "../context/cart";
import { CheckoutProvider } from "../context/checkout";
import Modal from "../components/payment/Modal";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <ModalProvider>
      <CartProvider>
        <CheckoutProvider>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Modal />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AnimatePresence>
        </CheckoutProvider>
      </CartProvider>
    </ModalProvider>
  </ThemeProvider>
  )
}

export default MyApp

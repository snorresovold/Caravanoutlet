import Head from 'next/head'
import commerce from '../lib/commerce';
import styles from '../styles/Home.module.css'

import { motion } from "framer-motion"

import CategoryList from '../components/Categories/CategoryList'
import ProductGrid from '../components/Products/ProductGrid';

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    limit: 200,
  });
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      products,
      categories,
    },
    revalidate: 60,
  }; 
}

export default function Home({ products, categories }) {
  return (
    <div>
      <Head>
        <title>Caravanoutlet</title>
      </Head>
      <h1>Caravanoutlet</h1>
      <p>Caravanoutlet intro side type ting etc.</p>
      <div>
        <h1>Våre kategorier</h1>
        <CategoryList categories={categories}/>
      </div>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10">
        <h1>Promoterte produkter</h1>
        <motion.div
            className="md:min-h-screen py-6 md:py-12 flex items-center md:w-1/2 md:z-40"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <ProductGrid
              products={products}
              className="h-112 md:h-96 xl:h-112"
            />
          </motion.div>
      </div>
    </div>
  )
}

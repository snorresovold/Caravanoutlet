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

function IndexPage({ products, categories }) {
  return (
    <>
      <Head>
        <title>CaravanOutlet</title>
      </Head>
      <div className={styles.categories}>
        <div>
          <h1>Kategorier</h1>
          <CategoryList categories={categories} />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
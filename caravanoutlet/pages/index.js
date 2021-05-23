import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { commerce } from "../lib/commerce";


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


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Caravanoutlet</h1>
    </div>
  )
}

import Link from "next/link";

import styles from "../../styles/Categories.module.css"

function CategoryList({ categories }) {

  return categories.map(({ name, slug }, index) => (
      <ul className={styles.list}>
        <li key={slug}>
      <Link href={`/kategorier/${slug}`}>
        <a className={styles.CategoryList}>{name}</a>
      </Link>
    </li>
      </ul>
  ));
}

export default CategoryList;

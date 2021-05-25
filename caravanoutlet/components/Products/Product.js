import Image from "next/image";
import Link from "next/link";

function Product({ media, name, permalink, price, className }) {

  return (
    <Link href={`/produkter/${permalink}`}>
      <h2>{name}</h2>
    </Link>
  );
}

export default Product;
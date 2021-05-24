import Image from "next/image";
import Link from "next/link";
import cc from "classcat";

function Product({ media, name, permalink, price, className }) {

  return (
    <Link href={`/produkter/${permalink}`}>
      
    </Link>
  );
}

export default Product;
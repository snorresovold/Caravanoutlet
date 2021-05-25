import Product from "./Product";

function ProductGrid({ products, ...props }) {
  if (!products || products.length === 0) return null;

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} {...props} />
      ))}
    </div>
  );
}

export default ProductGrid;

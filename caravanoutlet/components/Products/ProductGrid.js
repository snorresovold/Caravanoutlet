import Product from "./Product/Product";
import Link from "next/link";
import { Grid } from '@material-ui/core'

import useStyles from './styles';

function ProductGrid({ products, ...props }) {
  if (!products || products.length === 0) return null;
  const classes = useStyles();

  return (
    <main >
      <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                  <Link href={`/produkter/${product.permalink}`}>
                    <Grid className={classes.cursor} item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}  />
                    </Grid>
                  </Link>
            ))}
      </Grid>
</main>
  );
}

export default ProductGrid;

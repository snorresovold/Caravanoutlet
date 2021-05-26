import Link from "next/link";
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import useStyles from './styles';

import commerce from "../../../lib/commerce";

const Product = ({product}) => {
    const classes = useStyles();
      return (
        <Card className={classes.root}>
        <CardMedia component="image" className={classes.media} image={product.media.source} title={product.name} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {product.price.formatted} kr
            </Typography>
        </CardContent>
      </Card>
      )
  };
  
export default Product;
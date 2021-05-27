import React from "react";
import Head from "next/head";

import { commerce } from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";
import { useThemeDispatch } from "../../context/theme";
import { useModalDispatch } from "../../context/modal";

export async function getStaticProps({ params }) {
    const { permalink } = params;
  
    const product = await commerce.products.retrieve(permalink, {
      type: "permalink",
    });
  
    return {
      props: {
        product,
      },
      revalidate: 60,
    };
  }
  
  export async function getStaticPaths() {
    const { data: products } = await commerce.products.list();
  
    return {
      paths: products.map(({ permalink }) => ({
        params: {
          permalink,
        },
      })),
      fallback: false,
    };
  }

function productPage({ ptoduct }) {
    const { setCart } = useCartDispatch();
    const {
      variant_groups: variantGroups,
      assets,
      meta,
      related_products: relatedProducts,
    } = product;
    const images = assets.filter(({ is_image }) => is_image);
    const setTheme = useThemeDispatch();
    const { openModal } = useModalDispatch();

    const initialVariants = React.useMemo(
        () =>
          variantGroups.reduce((all, { id, options }) => {
            const [firstOption] = options;
    
            return { ...all, [id]: firstOption.id };
          }, {}),
        [product.permalink]
      );

    
    return (
        <React.Fragment>
            <Head>
                <title>{product.seo.title}</title>
                <meta name="description" content={product.seo.description}></meta>
            </Head>
        </React.Fragment>
    )
}
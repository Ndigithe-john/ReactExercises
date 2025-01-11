import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../actions/productActions";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { Grid, GridItem } from "@chakra-ui/react";

function ProductsContainer() {
  const productsData = useSelector((products) => products.products);
  const isLoading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {productsData.map((product) => (
            <GridItem key={product.id}>
              <ProductCard product={product} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
}

export default ProductsContainer;

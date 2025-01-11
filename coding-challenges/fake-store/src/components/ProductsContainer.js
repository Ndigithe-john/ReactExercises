import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../actions/productActions";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

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
        productsData.map((product) => <ProductCard product={product} />)
      )}
    </>
  );
}

export default ProductsContainer;

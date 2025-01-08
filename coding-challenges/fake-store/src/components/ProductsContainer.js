import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../actions/productActions";

function ProductsContainer() {
  const productsData = useSelector((products) => products.products);
  const dispatch = useDispatch();
  console.log(productsData);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {productsData.map((product) => (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.id} />
        </>
      ))}
    </div>
  );
}

export default ProductsContainer;

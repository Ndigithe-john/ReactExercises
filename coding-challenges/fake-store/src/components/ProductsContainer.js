import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../actions/productActions";

function ProductsContainer() {
  const productsData = useSelector((products) => products.products);
  const dispatch = useDispatch();
  console.log(productsData);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {productsData.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.id} />
        </div>
      ))}
    </div>
  );
}

export default ProductsContainer;

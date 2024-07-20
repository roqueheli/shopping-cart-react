import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  const { addProduct, removeProduct } = useContext(CartContext);

  return (
    <>
      <h1>Products</h1>
      <hr />
      {products?.map((product) => (
        <Card key={product.id}
          image={product.image}
          title={product.title}
          id={product.id}
          description={product.description}
          price={product.price}
          addingProduct={() => addProduct(product)}
          removingProduct={() => removeProduct(product.id)}
        />
      ))}
    </>
  );
};

export default Products;

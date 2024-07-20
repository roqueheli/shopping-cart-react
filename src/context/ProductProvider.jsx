import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ProductContext } from "./ProductContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const rs = await fetch("https://fakestoreapi.com/products");
      const data = await rs.json();
      setProducts(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un problema al cargar los productos",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

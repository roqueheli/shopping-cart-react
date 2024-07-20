import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import './Card.css';

const Card = ({ id, image, title, description, price, addingProduct, removingProduct }) => {
  const [added, setAdded] = useState(false);
  const { shoppingList } = useContext(CartContext);

  const addProduct = (e) => {
    e.preventDefault();
    addingProduct();
    setAdded(true);
  }

  const removeProduct = (e) => {
    e.preventDefault();
    removingProduct(id);
    setAdded(false);
  }

  useEffect(() => {
    setAdded(shoppingList.some(product => product.id == id));
  }, []);
  

  return (
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
        {added ? (
          <button type="button" className="remove-button" onClick={removeProduct}>
            Quitar del carrito
          </button>
        ) : (
          <button type="button" className="add-button" onClick={addProduct}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

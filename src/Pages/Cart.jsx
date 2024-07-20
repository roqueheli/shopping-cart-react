import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    shoppingList,
    removeProduct,
    incrementQty,
    decrementQty,
  } = useContext(CartContext);

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + (product.price * product.qty), 0).toFixed(2);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'La compra se ha realizado con éxito',
      html: `<p>Has comprado </p> <pre>${shoppingList.map((product) => `${product.title} x ${product.qty}`).join('\n')}</pre>`
    });
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList?.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.title}</th>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => decrementQty(product.id)}
                  >
                    -
                  </button>
                  <button className="btn btn-primary">{product.qty}</button>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => incrementQty(product.id)}
                  >
                    +
                  </button>
                </td>
                <td>{product.qty}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
          <tr></tr>
          <th>
            <b>Total: </b>
          </th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={handlePurchase} >
          Comprar
        </button>
      </div>
    </>
  );
};

export default Cart;

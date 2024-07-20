import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CartContext } from "../../context/CartContext";
import './Navbar.css';

const Navbar = () => {
  const { shoppingList } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Store</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/">
              Productos
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link navbar-cart" aria-current="page" to="/cart">
              Cart
            </NavLink>
          </div>
        </div>
        <NavLink className={'cart-icon'} to={"/cart"}>
          <Badge badgeContent={shoppingList.length} color="primary">
            <ShoppingCart />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./Pages/Products";
import "./App.css";
import Cart from "./Pages/Cart";
import ProductProvider from "./context/ProductProvider";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/*" element={<Navigate to={"/"} />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;

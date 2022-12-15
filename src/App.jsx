import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  const [shoppingCartVisibility, setShoppingCartVisibility] = useState(false);

  const showShoppingCart = () => {
    setShoppingCartVisibility(true);
  };
  const closeShoppingCart = () => {
    setShoppingCartVisibility(false);
  };
  return (
    <>
      <Header showShoppingCart={showShoppingCart} />
      <ShoppingCart
        isVisible={shoppingCartVisibility}
        closeShoppingCart={closeShoppingCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

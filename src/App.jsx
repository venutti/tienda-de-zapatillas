import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ShoppingCart from "./components/ShoppingCart";
import products from "./resources/product-list";

export default function App() {
  const [shoppingCartVisibility, setShoppingCartVisibility] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  const isProductInCart = (id) => {
    return shoppingCart.some((item) => item.id === id);
  };

  const addProductToShoppingCart = (id) => {
    if (isProductInCart(id)) {
      setShoppingCart((prevShoppingCart) => {
        return prevShoppingCart.map((item) => {
          if (item.id === id) {
            return { ...item, cant: item.cant + 1 };
          } else {
            return item;
          }
        });
      });
    } else {
      const newProduct = products.find((item) => item.id === id);
      newProduct.cant = 1;
      setShoppingCart(shoppingCart.concat([newProduct]));
    }
  };

  const removeProductFromShoppingCart = (id) => {
    let newShoppingCart;
    if (shoppingCart.find((product) => product.id === id).cant > 1) {
      newShoppingCart = shoppingCart.map((item) => {
        if (item.id === id) {
          return { ...item, cant: item.cant - 1 };
        } else {
          return item;
        }
      });
    } else {
      newShoppingCart = shoppingCart.filter((item) => item.id !== id);
    }
    setShoppingCart(newShoppingCart);
  };

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
        shoppingCart={shoppingCart}
        addProduct={addProductToShoppingCart}
        removeProduct={removeProductFromShoppingCart}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:id"
          element={<Product addProduct={addProductToShoppingCart} />}
        />
      </Routes>
    </>
  );
}

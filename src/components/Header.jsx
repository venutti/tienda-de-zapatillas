import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import ShoppingCartButton from "./ShoppingCartButton";

export default function Header(props) {
  return (
    <header className="app-header">
      <Logo />
      <NavLink className="link" to="/products">
        Productos
      </NavLink>
      <ShoppingCartButton showShoppingCart={props.showShoppingCart} />
    </header>
  );
}

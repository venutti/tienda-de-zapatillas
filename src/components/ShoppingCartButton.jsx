import shoppingCartIcon from "../icons/shopping-cart.svg";

export default function ShoppingCartButton(props) {
  return (
    <img
      onClick={() => props.showShoppingCart()}
      className="link"
      alt="shopping-cart-button"
      src={shoppingCartIcon}
    />
  );
}

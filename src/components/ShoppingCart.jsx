import closeIcon from "./icons/x.svg";

export default function ShoppingCart(props) {
  const { isVisible, closeShoppingCart } = props;
  return (
    <div className={isVisible ? "shopping-cart active" : "shopping-cart"}>
      <div className="shopping-cart-header">
        <h1>MI CARRITO</h1>
        <img
          className="close-btn"
          onClick={() => closeShoppingCart()}
          src={closeIcon}
          alt="close-button"
        />
      </div>
    </div>
  );
}

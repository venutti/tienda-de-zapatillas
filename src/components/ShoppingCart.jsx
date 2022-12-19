import closeIcon from "../icons/x.svg";
import styled from "@emotion/styled";

const CardStyled = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  background-color: #f3f3f3;
  display: flex;
  gap: 0.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 100px;
  border-radius: 20px;
`;

const CardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardTitle = styled.h3`
  font-family: sans-serif;
  font-size: 1rem;
`;
const ButtonPanelContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonLeft = styled.button`
  padding: 0.4rem;
  padding-left: 1rem;
  border: 1px solid var(--dark-green);
  border-radius: 15px 0 0 15px;
  background-color: var(--light-green);
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
`;
const ProductCant = styled.div`
  padding: 0.4rem 1rem;
  border: 1px solid #b3b3b3;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #616161;
`;
const ButtonRight = styled.button`
  padding: 0.4rem;
  padding-right: 1rem;
  border: 1px solid var(--dark-green);
  border-radius: 0 15px 15px 0;
  background-color: var(--light-green);
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
`;

const ButtonPanel = (props) => {
  const { cant, id, addProduct, removeProduct } = props;
  return (
    <ButtonPanelContainer>
      <ButtonLeft onClick={() => removeProduct(id)}>-</ButtonLeft>
      <ProductCant>{cant}</ProductCant>
      <ButtonRight onClick={() => addProduct(id)}>+</ButtonRight>
    </ButtonPanelContainer>
  );
};

const ShoppingCartItem = (props) => {
  const { img, name, cant, id, addProduct, removeProduct } = props;
  return (
    <CardStyled>
      <Img src={img} />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <ButtonPanel
          cant={cant}
          id={id}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />
      </CardInfo>
    </CardStyled>
  );
};

export default function ShoppingCart(props) {
  const {
    isVisible,
    closeShoppingCart,
    shoppingCart,
    addProduct,
    removeProduct,
  } = props;
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
      {shoppingCart.map((item) => {
        return (
          <ShoppingCartItem
            key={item.id}
            {...item}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        );
      })}
      <h2>
        Total:{" $"}
        {shoppingCart.reduce(
          (total, product) => total + product.price * product.cant,
          0
        )}
      </h2>
    </div>
  );
}

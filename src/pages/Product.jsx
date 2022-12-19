import { useParams } from "react-router-dom";
import products from "../resources/product-list";
import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  margin-bottom: 1rem;
  font-family: sans-serif;
  font-size: 2rem;
`;

const Img = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
`;

const MargenedContainer = styled.div`
  margin: 1rem;
  border: 1px solid #c3c3c3;
  padding: 1rem;
  background-color: #f3f3f3;
  border-radius: 20px;
`;

const StyledButton = styled.button`
  display: block;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: var(--light-green);
  border: 1px solid var(--dark-green);
  &:hover {
    filter: brightness(0.7);
  }
`;

export default function Product(props) {
  const { addProduct } = props;
  const { id } = useParams();
  const product = products.filter((item) => item.id === id)[0];
  return (
    <MargenedContainer>
      <StyledTitle>{product.name}</StyledTitle>
      <StyledButton onClick={() => addProduct(product.id)}>
        Agregar al carrito
      </StyledButton>
      <Img src={product.img} alt="" />
      <p>${product.price}</p>
    </MargenedContainer>
  );
}

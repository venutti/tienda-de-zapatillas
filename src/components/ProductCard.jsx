import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  font-family: sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
`;

const StyledCard = styled.div`
  border: 1px solid #c3c3c3;
  padding: 1rem;
  background-color: #f3f3f3;
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default function ProductCard(props) {
  const { img, name, price } = props;
  return (
    <StyledCard>
      <StyledTitle>{name}</StyledTitle>
      <Img src={img} alt="" />
      <p>${price}</p>
    </StyledCard>
  );
}

import products from "../resources/product-list";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  margin: 1rem;
  font-family: sans-serif;
  font-size: 2rem;
`;

export default function Products() {
  return (
    <div>
      <StyledTitle>Nuestros Productos</StyledTitle>
      <div className="product-list">
        {products.map(({ id, name, price, img }) => (
          <Link key={id} to={`/products/${id}`}>
            <ProductCard {...{ name, price, img }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

import products from "./resources/product-list";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Nuestros Productos</h1>
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

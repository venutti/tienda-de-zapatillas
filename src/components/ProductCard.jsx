export default function ProductCard(props) {
  const { img, name, price } = props;
  return (
    <div className="product">
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p>{price}</p>
    </div>
  );
}

export default function ProductItem({ name, image }) {
  ProductItem.propTypes;

  return (
    <>
      <div className="item-container">
        <h3 className="item-name">{name}</h3>
        <img className="item-img" src={image} alt="no pic found" />
      </div>
    </>
  );
}

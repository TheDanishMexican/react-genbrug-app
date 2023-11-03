export default function ClothingItem({ Title, Description, Image }) {
  ClothingItem.propTypes;

  return (
    <div>
      <h2>{Title}</h2>
      <p>{Description}</p>
      <img className="clothing-item-img" src={Image} alt="" />
    </div>
  );
}

export default function ProductItem({ name, image, getTabIndex }) {
  ProductItem.propTypes;

  return (
    <>
      <div className="item-container">
        <h3 className="item-name">{name}</h3>
        <img
          onClick={() => {
            switch (name) {
              case "Tøj til mænd":
                getTabIndex(5);
                break;
              case "Tøj til kvinder":
                getTabIndex(6);
                break;
              case "Diverse tøj":
                getTabIndex(7);
                break;
            }
          }}
          className="item-img"
          src={image}
          alt="no pic found"
        />
      </div>
    </>
  );
}

export default function AddClothesDialog({ handleChange, formData }) {
  AddClothesDialog.propTypes;
  //Add proptype validation

  function closeDialog() {
    const dialog = document.querySelector(".create-product-dialog");
    dialog.close();
  }

  return (
    <>
      <dialog open className="create-product-dialog">
        <button className="close-button" onClick={closeDialog}>
          <strong>X</strong>
        </button>
        <h2>Produkt information</h2>
        <form className="create-product-form" action="">
          <div className="label-input-container">
            <label htmlFor="create-product-title">Overskrift:</label>
            <input
              type="text"
              placeholder="Indtast overskrift"
              name="title"
              onChange={handleChange}
              value={formData.title}
              id="create-product-title"
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="create-product-price">Pris i hele kr:</label>
            <input
              type="number"
              placeholder="Indtast pris"
              name="price"
              onChange={handleChange}
              value={formData.price}
              id="create-product-price"
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="create-product-description">Beskrivelse:</label>
            <input
              type="textarea"
              placeholder="Indtast kort beskrivelse"
              name="description"
              onChange={handleChange}
              value={formData.description}
              id="create-product-description"
            />
          </div>
        </form>
      </dialog>
    </>
  );
}

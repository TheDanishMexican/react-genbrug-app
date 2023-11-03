export default function AddClothesDialog({ handleChange, formData }) {
  AddClothesDialog.propTypes;
  //Add proptype validation

  function closeDialog() {
    const dialog = document.querySelector(".create-product-dialog");
    dialog.close();
  }

  function gatherFormData(event) {
    event.preventDefault();

    console.log(formData);

    closeDialog();
  }

  return (
    <>
      <dialog open className="create-product-dialog fade-in">
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

          <div className="label-input-container">
            <label htmlFor="create-product-image">Billede link:</label>
            <input
              type="url"
              placeholder="Indtast link til billede"
              name="image"
              onChange={handleChange}
              value={formData.image}
              id="create-product-image"
            />
          </div>

          <div className="label-input-container">
            <label htmlFor="create-product-categorySelect">Kategori:</label>
            <select
              name="category"
              id="create-product-categorySelect"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Vælg
              </option>
              <option value="1">Herrer</option>
              <option value="2">Kvinder</option>
              <option value="3">Børn</option>
              <option value="4">Diverse</option>
            </select>
          </div>

          <div className="label-input-container">
            <label htmlFor="create-product-stateSelect">Stand:</label>
            <select
              name="state"
              id="create-product-stateSelect"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="" disabled>
                Vælg
              </option>
              <option value="5">Skal repareres</option>
              <option value="3">Meget brug</option>
              <option value="1">Brugt</option>
              <option value="4">God</option>
              <option value="2">Som ny</option>
              <option value="6">Aldrig brugt</option>
            </select>
          </div>

          <div className="label-input-container">
            <label htmlFor="create-product-sizeSelect">Størrelse:</label>
            <select
              name="size"
              id="create-product-sizeSelect"
              value={formData.size}
              onChange={handleChange}
            >
              <option value="" disabled>
                Vælg
              </option>
              <option value="5">X-small</option>
              <option value="2">Small</option>
              <option value="3">Medium</option>
              <option value="1">Large</option>
              <option value="4">X-large</option>
            </select>
          </div>
          <button
            onClick={gatherFormData}
            className="button-submit-new-clothing-item"
          >
            Tilføj
          </button>
        </form>
      </dialog>
    </>
  );
}

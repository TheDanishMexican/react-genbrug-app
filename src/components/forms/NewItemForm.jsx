export default function NewItemForm({ formData, handleChange }) {
  NewItemForm.propTypes;

  return (
    <>
      <div className="new-item-form-container">
        <form className="new-item-form">
          <fieldset className="new-item-fieldset">
            <legend>
              <h4 className="new-item-header">Tilføj nyt produkt</h4>
            </legend>
            <div className="new-item-input-container">
              <div>
                <label htmlFor="select-produktType">
                  Vælg en produkt type:{" "}
                </label>
                <select
                  id="select-produktType"
                  value={formData.produktType}
                  onChange={handleChange}
                  name="produktType"
                >
                  <option disabled value="">
                    --Vælg type--
                  </option>
                  <option value="tøj">Tøj</option>
                  <option value="møbel">Møbel</option>
                  <option value="køkken">Køkken</option>
                </select>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

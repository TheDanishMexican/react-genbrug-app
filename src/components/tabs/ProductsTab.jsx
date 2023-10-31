import { useState } from "react";
import NewItemForm from "../forms/NewItemForm";
import AddClothesDialog from "../dialogs/AddClothesDialog";

export default function ProductsTab() {
  const [formData, setFormData] = useState({
    produktType: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="product-tab-container">
        <div className="product-tab-header">
          <div className="product-tab-title">
            <h1 className="product-tab-h1">Produkter</h1>
          </div>
          <NewItemForm handleChange={handleChange} formData={formData} />
        </div>
        {formData.produktType === "tøj" && <AddClothesDialog />}
      </div>
    </>
  );
}

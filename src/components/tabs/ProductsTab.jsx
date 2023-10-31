import { useEffect, useState } from "react";
import NewItemForm from "../forms/NewItemForm";
import AddClothesDialog from "../dialogs/AddClothesDialog";
import ProductItem from "../ProductItem";

export default function ProductsTab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    produktType: "",
    title: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <>
      <div className="product-tab-container fade-in">
        <div className="product-tab-header">
          <div className="product-tab-title">
            <h1 className="product-tab-h1">Produkter</h1>
          </div>
          <NewItemForm handleChange={handleChange} formData={formData} />
        </div>
        <div className="product-tab-main">
          <ProductItem
            name={"Tøj til kvinder"}
            image={
              "https://i0.pickpik.com/photos/828/755/695/shopping-mall-shop-windows-fashionable-clothes-feminine-weakness-preview.jpg"
            }
          />
          <ProductItem
            name={"Tøj til mænd"}
            image={
              "https://retaildesignblog.net/wp-content/uploads/2015/07/Mens-The-Lab-department-store-by-Magasin-du-Nord-Copenhagen-Denmark.jpg"
            }
          />
          <ProductItem
            name={"Tøj til børn"}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/4/4e/Vendor_of_children%27s_clothing_at_Zhonghua_Road_Night_Market%2C_Taichung_20090815.jpg"
            }
          />
          <ProductItem
            name={"Diverse tøj"}
            image={
              "https://scholarlycommons.pacific.edu/kam-photos/2128/preview.jpg"
            }
          />
          <ProductItem
            name={"Møbler"}
            image={
              "https://s0.geograph.org.uk/geophotos/07/07/34/7073469_8670a0e3.jpg"
            }
          />
          <ProductItem
            name={"Køkken sager"}
            image={
              "https://i1.pickpik.com/photos/612/14/530/kitchen-glove-plate-spoon-preview.jpg"
            }
          />
        </div>
        {formData.produktType === "tøj" && (
          <AddClothesDialog handleChange={handleChange} formData={formData} />
        )}
      </div>
    </>
  );
}

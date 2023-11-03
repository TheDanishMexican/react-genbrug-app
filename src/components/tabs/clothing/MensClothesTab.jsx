import { useEffect, useState } from "react";
import ClothingItem from "../../item/ClothingItem";

export default function MensClothesTab() {
  const [mensClothesData, setMensClothesData] = useState();

  useEffect(() => {
    fetchMensClothesData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function fetchMensClothesData() {
    try {
      const response = await fetch(`http://localhost:3001/mensClothes`);
      if (response.ok) {
        const data = await response.json();
        setMensClothesData(await data);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const mensClothesElements = mensClothesData?.map((item, index) => (
    <ClothingItem
      key={index}
      Title={item.Title}
      Description={item.Description}
      Image={item.Image}
    />
  ));

  return (
    <div className="mens-clothes-container fade-in">{mensClothesElements}</div>
  );
}

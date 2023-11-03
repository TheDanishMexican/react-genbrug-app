import { useEffect, useState } from "react";
import ClothingItem from "../../item/ClothingItem";

export default function WomensClothesTab() {
  const [womensClothesData, setWomensClothesData] = useState();

  useEffect(() => {
    fetchWomensClothesData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function fetchWomensClothesData() {
    try {
      const response = await fetch(`http://localhost:3001/womensClothes`);
      if (response.ok) {
        const data = await response.json();
        setWomensClothesData(await data);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const womensClothesElements = womensClothesData?.map((item, index) => (
    <ClothingItem
      key={index}
      Title={item.Title}
      Description={item.Description}
      Image={item.Image}
    />
  ));

  return (
    <div className="womens-clothes-container fade-in">
      {womensClothesElements}
    </div>
  );
}

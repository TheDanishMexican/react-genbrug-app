import { useEffect, useState } from "react";
import ClothingItem from "../../item/ClothingItem";

export default function AllClothesTab() {
  const [allClothesData, setAllClothesData] = useState();

  useEffect(() => {
    fetchAllClothesData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function fetchAllClothesData() {
    try {
      const response = await fetch(`http://localhost:3001/clothes`);
      if (response.ok) {
        const data = await response.json();
        setAllClothesData(await data);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const allClothesElements = allClothesData?.map((item, index) => (
    <ClothingItem
      key={index}
      Title={item.Title}
      Description={item.Description}
      Image={item.Image}
    />
  ));

  return (
    <div className="mens-clothes-container fade-in">{allClothesElements}</div>
  );
}

import { useEffect } from "react";
import ClothingItem from "./ClothingItem";

export default function VolunteersTab({ clothesData }) {
  VolunteersTab.propTypes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clothes = clothesData.map((item, index) => {
    return (
      <ClothingItem
        key={index}
        Title={item.Title}
        Description={item.Description}
      />
    );
  });

  return (
    <>
      <div className="volunteer-tab-container">
        <div className="volunteer-tab-header"></div>
        <div className="volunteer-tab-main">{clothes}</div>
      </div>
    </>
  );
}

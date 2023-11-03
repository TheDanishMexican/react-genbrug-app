import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/tabs/LandingPageTab";
import ProductsTab from "./components/tabs/ProductsTab";
import VolunteersTab from "./components/tabs/VolunteersTab";
import Footer from "./Footer";
import PracticalInfo from "./components/tabs/PracticalInfoTab";
import MensClothesTab from "./components/tabs/clothing/MensClothesTab";
import WomensClothesTab from "./components/tabs/clothing/WomensClothesTab";
import AllClothesTab from "./components/tabs/clothing/AllClothesTab";

export default function App() {
  const [toggleTab, setToggleTab] = useState(1);

  function getTabIndex(index) {
    setToggleTab(index);
  }

  return (
    <>
      <Navbar getTabIndex={getTabIndex} />
      {toggleTab === 1 && <LandingPage />}
      {toggleTab === 2 && <VolunteersTab />}
      {toggleTab === 3 && <ProductsTab getTabIndex={getTabIndex} />}
      {toggleTab === 5 && <MensClothesTab />}
      {toggleTab === 6 && <WomensClothesTab />}
      {toggleTab === 7 && <AllClothesTab />}
      {toggleTab === 4 && <PracticalInfo />}
      <Footer getTabIndex={getTabIndex} />
    </>
  );
}

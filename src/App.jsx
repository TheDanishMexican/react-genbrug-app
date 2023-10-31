import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/tabs/LandingPageTab";
import ProductsTab from "./components/tabs/ProductsTab";
import VolunteersTab from "./components/tabs/VolunteersTab";
import Footer from "./Footer";
import PracticalInfo from "./components/tabs/PracticalInfoTab";

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
      {toggleTab === 3 && <ProductsTab />}
      {toggleTab === 4 && <PracticalInfo />}
      <Footer getTabIndex={getTabIndex} />
    </>
  );
}

import { useEffect } from "react";
import MainContent from "../MainContent";

export default function LandingPageTab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainContent />
    </>
  );
}

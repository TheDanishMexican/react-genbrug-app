import { useEffect } from "react";

export default function VolunteersTab() {
  VolunteersTab.propTypes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="volunteer-tab-container">
        <div className="volunteer-tab-header"></div>
        <div className="volunteer-tab-main"></div>
      </div>
    </>
  );
}

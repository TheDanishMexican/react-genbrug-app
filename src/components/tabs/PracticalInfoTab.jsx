import { useEffect } from "react";

export default function PracticalInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="practicalInfo-container fade-in">
        <div className="opening-hours-container">
          <h3>Åbningstider</h3>
          <ul>
            <li>
              <strong>Mandag:</strong>09:00 - 17:00
            </li>
            <li>
              <strong>Tirsdag:</strong>09:00 - 17:00
            </li>
            <li>
              <strong>Onsdag:</strong>09:00 - 17:00
            </li>
            <li>
              <strong>Torsdag:</strong>09:00 - 17:00
            </li>
            <li>
              <strong>Fredag:</strong>09:00 - 15:00
            </li>
            <li>
              <strong>Lørdag:</strong>11:00 - 15:00
            </li>
            <li>
              <strong>Søndag:</strong>Lukket
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

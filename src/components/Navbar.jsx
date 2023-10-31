export default function Navbar({ getTabIndex }) {
  //Add proptype validation
  Navbar.propTypes;

  return (
    <>
      <nav className="navBar">
        <ul className="navBar-ul">
          <li onClick={() => getTabIndex(2)} className="navBar-li">
            TILFØJ FRIVLLIG
          </li>
          <li onClick={() => getTabIndex(1)} className="navBar-li">
            FORSIDE
          </li>
          <li onClick={() => getTabIndex(3)} className="navBar-li">
            ADMINISTRATION AF GENBRUG
          </li>
        </ul>
      </nav>
    </>
  );
}

export default function Footer({ getTabIndex }) {
  Footer.propTypes;

  return (
    <>
      <>
        <nav className="navBar-footer">
          <ul className="navBar-footer-ul">
            <li onClick={() => getTabIndex(4)} className="navBar-footer-li">
              PRAKTISKE INFO
            </li>
            <li className="navBar-footer-li">
              <a href="https://www.instagram.com/rodekorsgenbrug/?hl=en">
                <img
                  className="footer-img"
                  src="https://live.staticflickr.com/65535/49813049796_0030ca3f16_z.jpg"
                  alt="no pic found"
                />
              </a>
            </li>
            <li className="navBar-footer-li">
              <a href="https://www.facebook.com/Rodekorsgenbrug/?locale=da_DK">
                <img
                  className="footer-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
                  alt="no pic found"
                />
              </a>
            </li>
          </ul>
        </nav>
      </>
    </>
  );
}

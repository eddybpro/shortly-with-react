import "./Navbar.css";
import Logo from "../assets/logo.svg";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <a href="#" className="Logo" aria-label="shortly">
        <img src={Logo} alt="" />
      </a>
      <div className="MenuBox">
        {isMenuOpen ? (
          <button
            aria-label="close"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="MenuBox-CloseSpan1"></span>
            <span className="MenuBox-CloseSpan2"></span>
          </button>
        ) : (
          <button
            aria-label="menu"
            className="MenuBox-MenuBtn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      <div className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <ul>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              features
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              pricing
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              resources
            </a>
          </li>
        </ul>
        <div className="Navlinks-Btns">
          <button
            className="Navlinks-Btns-Login"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            login
          </button>
          <button
            className="Navlinks-Btns-SignUp"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

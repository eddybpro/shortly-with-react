import "./Header.css";
import Navbar from "./Navbar";
import Illustration from "../assets/illustration-working.svg";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="HeaderBox">
        <div className="HeaderBox-ImgBox">
          <img src={Illustration} alt="" />
        </div>
        <div className="HeaderBox-TxtBox">
          <h1 className="HeaderBox-TxtBox-Title">
            More than just shorter links
          </h1>
          <p className="HeaderBox-TxtBox-Para">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="HeaderBox-TxtBox-Btn"> Get Started</button>
        </div>
      </div>
    </header>
  );
}
export default Header;

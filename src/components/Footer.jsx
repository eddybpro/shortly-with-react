import "./Footer.css";
import Logo from "../assets/logo.svg";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="shortly">
        <img src={Logo} alt="shortly" />
      </a>

      <div className="FooterWrapper">
        <ul className="FooterWrapper-List">
          <li className="FooterWrapper-List-Link Title">
            <a href="#">Features</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Link Shortening</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Branded Links</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Analytics</a>
          </li>
        </ul>
        <ul className="FooterWrapper-List">
          <li className="FooterWrapper-List-Link Title">
            <a href="#"> Resources</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Blog</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Developers</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Support</a>
          </li>
        </ul>
        <ul className="FooterWrapper-List">
          <li className="FooterWrapper-List-Link Title">
            <a href="#"> Company </a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">About</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Our Team</a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Careers </a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="FooterWrapper-SocialIcons">
          <li className="FooterWrapper-List-Link">
            <a href="#" aria-label="facebook">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaFacebookSquare />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#" aria-label="twitter">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaTwitter />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#" aria-label="pinterest">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaPinterest />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="FooterWrapper-List-Link">
            <a href="#" aria-label="instagram">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;

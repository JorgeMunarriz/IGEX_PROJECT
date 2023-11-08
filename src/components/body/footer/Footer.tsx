import { FooterStyles } from "./footer.styles";
import { BsGraphUpArrow, BsList, BsTwitter, BsX,  } from "react-icons/bs";
import { FaFish} from "react-icons/fa6"
import { useState } from "react";

export const Footer = () => {
  const [active, setActive] = useState(false);
  const handleDropdown = () => {
    const footerContainerDropdown = document.getElementById("footerContainer");
    footerContainerDropdown?.classList.toggle("active");
    setActive(!active);
  };

  return (
    <FooterStyles>
      <div className="footer__dropdown">
        <button className="footer__dropdown_button" aria-label="button dropdown footer" onClick={handleDropdown}>
          {!active ? <BsList /> : <BsX />}
        </button>
      </div>
      <div className="footer" id="footerContainer">
        <div className="footer__header">
          <ul className="footer__header-socialmedia">
            {/* <li className="footer__header-socialmedia-list">
              <a href="https://www.facebook.com/" title="Link to Facebook" className="footer__header-socialmedia-list-link" target="_blanck">
                <BsFacebook />
              </a>
            </li> */}
            <li className="footer__header-socialmedia-list">
              <a href="https://sonrionansa.com/" title="Link to Sonrionansa" className="footer__header-socialmedia-list-link" target="_blanck">
              <FaFish/>
              </a>
            </li>
            <li className="footer__header-socialmedia-list">
              <a href="https://twitter.com/IGEX_Official" title="Link to Twitter" className="footer__header-socialmedia-list-link" target="_blanck">
                <BsTwitter />
              </a>
            </li>
            <li className="footer__header-socialmedia-list">
              <a href="https://www.otcmarkets.com/" title="Link to OTCMarkets" className="footer__header-socialmedia-list-link" target="_blanck">
                <BsGraphUpArrow />
              </a>
            </li>
            <li className="footer__header-socialmedia-list">
              <a href="https://eiespain.com/" title="Link to eiespain" className="footer__header-socialmedia-list-link" target="_blanck">
                <img className="footer__header-socialmedia-list-link-logo" src="https://eiespain.com/wp-content/uploads/2020/02/Logo-eie-512.png" alt="logo image" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__main">
          <ul className="footer__main-terms">
            <li className="footer__main-terms-list">Conditions of use</li>
            <li className="footer__main-terms-list">
              {" "}
              <a href="" className="pdcc-open-modal footer__main-terms-list-link">
                Privacy & Policy
              </a>
            </li>
            <li className="footer__main-terms-list">Press Room</li>
          </ul>
        </div>
      </div>
      <div className="footer__footer" id="copyrightContainer">
        <p className="footer__footer-copyright">© 2023 IGEX</p>
      </div>
    </FooterStyles>
  );
};

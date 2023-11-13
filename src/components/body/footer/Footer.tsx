import { FooterStyles } from "./footer.styles";
import { BsList, BsX } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { otcLogo } from "../../../assets/images";
import { ModalCookies } from "../..";
import { Link } from "react-router-dom";
import { TERMS } from "../../../config/paths";


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
              <a href="https://sonrionansa.com/" title="Link to Sonrionansa" className="footer__header-socialmedia-list-link" target="_blanck">
              <FaFish/>
              </a>
            </li> */}
            <li className="footer__header-socialmedia-list">
              <a href="https://twitter.com/IGEX_Official" title="Link to IGEX's Twitter" className="footer__header-socialmedia-list-link" target="_blanck">
                <FaXTwitter />
              </a>
            </li>
            <li className="footer__header-socialmedia-list">
              <a href="https://www.otcmarkets.com/stock/IGEX/overview" title="Link to OTCMarkets" className="footer__header-socialmedia-list-link" target="_blanck">
                <img className="footer__header-socialmedia-list-link-logo-otc" src={otcLogo} alt="logo image" />
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
            <li className="footer__main-terms-list">
              <Link to={TERMS}  className="footer__main-terms-list-link" title="Link to conditions of use">
                Conditions of use
              </Link>
            </li>
            {/* <li className="footer__main-terms-list">
              <p className="pdcc-open-modal footer__main-terms-list-link" title="Link to Privacy & Policy">
                Privacy & Policy
              </p>
            </li> */}
            <li className="footer__main-terms-list">
              <a href="https://www.otcmarkets.com/stock/IGEX/news" target="_blanck" className="footer__main-terms-list-link" title="Link to Press room OTC">
                Press Room
              </a>
            </li>
            <li className="footer__main-terms-list">
              <a href="https://www.youtube.com/@IndoGlobalExchangesPte.Ltd." target="_blank" className="footer__main-terms-list-link" title="Link to Youtube IGEX's channel">
                Youtube Channel
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__footer" id="copyrightContainer">
        <p className="footer__footer-copyright">© 2023 IGEX</p>
        <ModalCookies />
      </div>
    </FooterStyles>
  );
};

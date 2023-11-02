import { FooterStyles } from "./footer.styles";
import { BsFacebook, BsGithub, BsInstagram, BsList, BsTwitter, BsX, BsYoutube } from "react-icons/bs";
import { useState } from 'react';

export const Footer = () => {
  const [active, setActive] = useState(false)
    const handleDropdown = () => {
      const footerContainerDropdown = document.getElementById("footerContainer");
      footerContainerDropdown?.classList.toggle("active")
      setActive(!active)
    }

  return (
    <FooterStyles >
      <div className="footer__dropdown">
        <button className="footer__dropdown_button" onClick={handleDropdown}>
          {!active ? <BsList/> :  <BsX/>}
        
        </button>
      </div>
      <div className="footer" id="footerContainer">
      <div className="footer__header">
        <ul className="footer__header-socialmedia">
          <li className="footer__header-socialmedia-list">
            <a href="https://www.facebook.com/" title="Link to Facebook" className="footer__header-socialmedia-list-link" target="_blanck">
              <BsFacebook />
            </a>
          </li>
          <li className="footer__header-socialmedia-list">
            <a href="https://www.github.com/" title="Link to Github" className="footer__header-socialmedia-list-link">
              <BsGithub />
            </a>
          </li>
          <li className="footer__header-socialmedia-list">
            <a href="https://www.instagram.com/" title="Link to Instagram" className="footer__header-socialmedia-list-link">
              <BsInstagram />
            </a>
          </li>
          <li className="footer__header-socialmedia-list">
            <a href="https://www.twitter.com/" title="Link to Twitter" className="footer__header-socialmedia-list-link">
              <BsTwitter />
            </a>
          </li>
          <li className="footer__header-socialmedia-list">
            <a href="https://www.youtube.com/" title="Link to Youtube" className="footer__header-socialmedia-list-link">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__main">
        <ul className="footer__main-terms">
          <li className="footer__main-terms-list">Conditions of use</li>
          <li className="footer__main-terms-list">Privacy & Policy</li>
          <li className="footer__main-terms-list">Press Room</li>
        </ul>
      </div>
      </div>
      <div className="footer__footer" id="copyrightContainer">
        <p className="footer__footer-copyright" >© 2023 Copyright IGEX</p>
      </div>
    </FooterStyles>
  );
};

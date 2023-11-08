import { Link } from "react-router-dom";
import { HeaderStyles } from "./header.styles";
import { ABOUT, CONTACT, HOME, TEAM } from "../../../config/paths";
import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";

export const Header = () => {
  const [active, setActive] = useState(false);
  const handleDropdown = () => {
    const footerContainerDropdown = document.getElementById("headerRightNavigation");
    footerContainerDropdown?.classList.toggle("active");
    setActive(!active);
  };

  return (
    <HeaderStyles>
      <div>
      <Link className="header__left" to={HOME}>
        <h1 className="header__left-title">Home</h1>
      </Link>

      </div>
      <div className="header__right">
        <nav className="header__right_nav" id="headerRightNavigation">
          <ul className="header__right_nav_ul">
            <li className="header__right_nav_ul_list">
              <Link to={TEAM} className="header__right_nav_ul_list_link" title="Link to home" >
                Team
              </Link>
            </li>
            <li className="header__right_nav_ul_list">
              <Link to={ABOUT} className="header__right_nav_ul_list_link" title="Link to about" >
                About
              </Link>
            </li>
            <li className="header__right_nav_ul_list">
              <Link to={CONTACT} className="header__right_nav_ul_list_link" title="Link to contact" >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__right_dropdown">
          <button className="header__right_dropdown_button" aria-label="button dropdown menu" onClick={handleDropdown}>
            {!active ? <BsList /> : <BsX />}
          </button>
        </div>
      </div>
    </HeaderStyles>
  );
};

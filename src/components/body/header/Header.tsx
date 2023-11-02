import { Link } from "react-router-dom";
import { HeaderStyles } from "./header.styles";
import { ABOUT, CONTACT, HOME, MEDIA } from "../../../config/paths";

export const Header = () => {


  return (
    <HeaderStyles>
      <Link className="header__left" to={HOME}>
        <h1 className="header__left-title" >IGEX</h1>
      </Link>
      <div className="header__right">
        <nav className="header__right_nav">
            <ul className="header__right_nav_ul">
                <li className="header__right_nav_ul_list"><Link to={MEDIA} className="header__right_nav_ul_list_link">Media</Link></li>
                <li className="header__right_nav_ul_list"><Link to={ABOUT} className="header__right_nav_ul_list_link">About</Link></li>
                <li className="header__right_nav_ul_list"><Link to={CONTACT} className="header__right_nav_ul_list_link">Contact</Link></li>
            </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
};

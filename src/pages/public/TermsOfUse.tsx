import { Link } from "react-router-dom";
import { CONTACT, COOKIES } from '../../config/paths';
import { TermsOfUsePageStyles } from ".";


const TermsOfUse = () => {
  return (
    <TermsOfUsePageStyles>
        
      <h2>Terms of Use</h2>
      <p>Welcome to the Terms of Use page of igexglobal.com.</p>

      <p>
        By using this website, you agree to comply with the following Terms of Use. These terms establish the rules and regulations governing the use of igexglobal.com. Please read them carefully.
      </p>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By accessing and using igexglobal.com, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, please do not use this website.
      </p>

      <h3>2. User Conduct</h3>
      <p>
        You agree not to use this website for any unlawful or prohibited purposes. You are responsible for your own use of the site and any content you post or share.
      </p>

      <h3>3. Privacy Policy</h3>
      <p>
        Your use of this website is also governed by our Privacy Policy. Please review our <Link to={COOKIES}>Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
      </p>

      <h3>4. Contact Us</h3>
      <p>
        If you have any questions or concerns regarding these Terms of Use or your use of the website, please don't hesitate to <Link to={CONTACT}>contact us</Link>.
      </p>
        
    </TermsOfUsePageStyles>
  );
};

export default TermsOfUse;

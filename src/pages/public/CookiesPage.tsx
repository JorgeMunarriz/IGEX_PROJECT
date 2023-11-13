import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, TERMS } from '../../config/paths';
import { CookiesPageStyles } from '.';

const CookiesPage = () => {
  return (
    <CookiesPageStyles>
      <h2>Privacy Policy and Terms of Use</h2>
      <p>Welcome to the Privacy Policy and Terms of Use page of igexglobal.com.</p>
      
      <h3>Privacy Policy</h3>
      <p>
        At igexglobal.com, we are committed to protecting the privacy of our users. Our privacy policy outlines how we collect, use, and safeguard the personal information you provide while using our website. We prioritize your data security and compliance with applicable privacy laws, including the European Union's General Data Protection Regulation (GDPR).
      </p>

      <h3>Terms of Use</h3>
      <p>
        By using this website, you agree to adhere to our Terms of Use. These terms establish the rules and regulations governing the use of igexglobal.com. We encourage you to carefully review our <Link to={TERMS}>Terms of Use</Link> to fully understand your rights and responsibilities when using our site.
      </p>

      <p>
        If you have any questions or concerns regarding our Privacy Policy or Terms of Use, please do not hesitate to <Link to={CONTACT}>contact us</Link>.
      </p>
    </CookiesPageStyles>
  );
};

export default CookiesPage;

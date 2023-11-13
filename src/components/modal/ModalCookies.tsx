import { useState } from "react";
import { ModalButton, ModalContainer, ModalContent, ModalStyles, Checkbox } from "./modalCookies.styles";

import { BsArrowLeft, BsX } from "react-icons/bs";
import { COOKIES } from "../../config/paths";
import { useConsentContext } from "../../hooks/useContextHook";

const ModalCookies = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState(false);
  const { cookiesConsent, acceptCookiesConsent, rejectCookiesConsent, toogleCookiesConsent } = useConsentContext();
  console.log(cookiesConsent);
  const technicalConsent: boolean = true;

  const toogleModal = () => {
    setIsOpen(!modalIsOpen);
  };
  const changeModalDescription = () => {
    setModalDescription(!modalDescription);
  };

  return (
    <ModalStyles>
      <button className="modal__btn-open" onClick={toogleModal}>
        Privacy & Policy
      </button>
      {modalIsOpen && (
        <ModalContainer>
          <ModalContent>
            {modalDescription && modalIsOpen ? (
              <div className="cookiesPage">
                <div className="cookiesPage__closeContainer">
                  <button className="cookiesPage__closeContainer_button" onClick={toogleModal}>
                    <BsX />
                  </button>
                </div>
                <div className="cookiesPage__header">
                  <div className="cookiesPage__header__titleContainer">
                    <h2 className="cookiesPage__header__titleContainer_title">Cookie Consent</h2>
                  </div>

                  <div className="cookiesPage__header__acceptOrRejectContainer">
                    <button className="cookiesPage__header__acceptOrRejectContainer_acceptBtn" onClick={acceptCookiesConsent}>
                      Accept all
                    </button>
                    <button className="cookiesPage__header__acceptOrRejectContainer_rejectBtn" onClick={changeModalDescription}>
                      Configure
                    </button>
                  </div>
                </div>
                    <div className="cookiesPage__main">
                      <p className="cookiesPage__main_paragraph">
                        We use our own cookies and third-party cookies for analytical purposes and to display personalised advertising based on a profile drawn from your browsing habits.
                      </p>
                      <p className="cookiesPage__main_paragraph">
                        For more information, consult the{" "}
                        <a href={COOKIES} className="cookiesPage__main_paragraph_link">
                          cookie policy.
                        </a>
                      </p>
                      <p className="cookiesPage__main_paragraph"> You can accept all cookies by pressing the "Accept all" button or configure or reject their use by pressing the "Configure" button.</p>
                    </div>
              </div>
            ) : (
              <div className="cookiesPage">
                <div className="cookiesPage__closeContainer">
                  <button className="cookiesPage__closeContainer_button" onClick={toogleModal}>
                    <BsX />
                  </button>
                </div>
                <div className="cookiesPage__header">
                  <div className="cookiesPage__header__titleContainer">
                    <h2 className="cookiesPage__header__titleContainer_title">Cookie Consent</h2>
                  </div>
                  <div className="cookiesPage__header__goBackContainer">
                    <button className="cookiesPage__header__goBackContainer_button" onClick={changeModalDescription}>
                      <BsArrowLeft /> Go back
                    </button>
                  </div>
                  <div className="cookiesPage__header__acceptOrRejectContainer">
                    <button className="cookiesPage__header__acceptOrRejectContainer_acceptBtn" onClick={acceptCookiesConsent}>
                      Accept all
                    </button>
                    <button className="cookiesPage__header__acceptOrRejectContainer_rejectBtn" onClick={rejectCookiesConsent}>
                      Reject all
                    </button>
                  </div>
                </div>

                <div className="cookiesPage__formContainer">
                  
                    <div className="cookiesPage__formContainer_div">
                      <div className="checkbox">
                        <Checkbox type="checkbox" id="check_technical" checked={technicalConsent} disabled />
                        <label htmlFor="check_technical"></label>
                      </div>
                      <div className="cookiesPage__formContainer_div_textContainer">
                        <label className="cookiesPage__formContainer_div_textContainer_label" htmlFor="check_technical">
                          Igex Global Web
                        </label>
                        <span className="cookiesPage__formContainer_div_textContainer_span">Technical and functional cookies</span>
                      </div>
                    </div>
                    <div className="cookiesPage__formContainer_div">
                    <div className="checkbox">
                      <Checkbox type="checkbox" id="check_extraConsent" checked={cookiesConsent} onClick={toogleCookiesConsent} />
                      <label htmlFor="check_extraConsent"></label>
                    </div>
                    <div className="cookiesPage__formContainer_div_textContainer">
                        <label className="cookiesPage__formContainer_div_textContainer_label" htmlFor="check_technical">
                          Cloudinary
                        </label>
                        <span className="cookiesPage__formContainer_div_textContainer_span">Cookies for analytics purposes</span>
                      </div>
                  </div>

                </div>
                  <button className="cookiesPage__formContainer_btnSave" type="submit" onClick={toogleModal}>
                    Save Settings
                  </button>
              </div>
            )}
            <ModalButton onClick={toogleModal}>Close</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </ModalStyles>
  );
};

export default ModalCookies;

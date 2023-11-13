import { Link, useNavigate } from "react-router-dom";
import { ABOUT, CONTACT, HOME, TEAM } from "../../config/paths";
import { LandingPageStyles } from "..";
import { useState, useEffect } from "react";
import { imageLogo } from "../../assets/images";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  // const [playMusic, setPlayMusic] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setPlayMusic(true);
      setShowLogo(true);
      setTimeout(() => {
        setShowTitle(true);
      }, 2500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  setTimeout(() => {
    navigate(HOME);
  }, 13500000);

  // const videoLanding: string | undefined = import.meta.env.VITE_VIDEO_LANDING;

  return (
    <LandingPageStyles>
      <div className="background__linksContainer">
        <Link to={HOME} className="background__linksContainer_btnLink" title="Link to home">
          Home
        </Link>
        <Link to={TEAM} className="background__linksContainer_btnLink" title="Link to team">
          Team
        </Link>
        <Link to={ABOUT} className="background__linksContainer_btnLink" title="Link to about">
          About
        </Link>
        <Link to={CONTACT} className="background__linksContainer_btnLink" title="Link to contact">
          Contact
        </Link>
      </div>
      <div className="background"></div>
      {showLogo && (
        <>
          <div className={showLogo ? "active" : ""}>
            <img src={imageLogo} alt="igex logo" className="imageLogo" />
          </div>
        </>
      )}
      {showTitle && (
        <div>
          <h3 className="background__title">INDO GLOBAL EXCHANGES LTD</h3>
        </div>
      )}
      {/* {playMusic && (
        <>
          {/* <audio className="background__video" src={videoLanding} autoPlay={true} muted={false} controls={false} loop={false} playsInline={true} /> }
        </>
      )} */}
    </LandingPageStyles>
  );
};

export default LandingPage;

import { Link, useNavigate } from "react-router-dom";
import { HOME } from "../../config/paths";
import { LandingPageStyles } from "..";
import { useState, useEffect } from "react";
import { imageLogo } from "../../../public";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [playMusic, setPlayMusic] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayMusic(true);
      setShowLogo(true);
      setTimeout(() => {
        setShowTitle(true);
      }, 2500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  setTimeout(() => {
    navigate(HOME);
  }, 10500000);

  const videoLanding: string | undefined = import.meta.env.VITE_VIDEO_LANDING;

  return (
    <LandingPageStyles>
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
          <h3 className="background__title">INDO CLOBAL EXHANGES LTD</h3>
        </div>
      )}
      {playMusic && (
        <>
          <audio className="background__video" src={videoLanding} autoPlay={true} muted={false} controls={false} loop={false} playsInline={true} />
        </>
      )}

      <Link to={HOME} className="background__btnLink">
        Go to HomePage
      </Link>
    </LandingPageStyles>
  );
};

export default LandingPage;

import { Link } from "react-router-dom";
import { HOME } from "../../config/paths";
import { LandingPageStyles } from "..";
// import { useEffect, useState } from "react";

const LandingPage = () => {
  // const navigate = useNavigate();
  // const [showLogo, setShowLogo] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLogo(true);
  //   }, 2500);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  // setTimeout(() => {
  //   navigate(HOME);
  // }, 5000);

  return (
    <LandingPageStyles>
      <div className="background"></div>
      {/* {
            showLogo && (
              <>
                <div className={showLogo ? "active" : ""}>
                    <img src={imageLogo} alt="igex logo" className="imageLogo" />
                </div>
              </>

            )
        } */}

      <video className="background__video" src="https://res.cloudinary.com/dco3p5czc/video/upload/f_auto:video,q_auto/v1/igex%20web/flxdg7mv87jhyamlxkfx" autoPlay={true} controls={false}></video>

      
        <Link to={HOME} className="background__btnLink">HomePage</Link>
      
    </LandingPageStyles>
  );
};

export default LandingPage;

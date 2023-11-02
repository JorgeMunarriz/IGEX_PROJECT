import { useNavigate } from "react-router-dom";
import { HOME } from "../../config/paths";
import { LandingPageStyles } from "..";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowLogo(true);
        
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate])
  

  setTimeout(() => {
    navigate(HOME);
  }, 5000);

  return (
    <LandingPageStyles>
        <div className="background"></div>
        {
            showLogo && (
                <div className={showLogo ? "active" : ""}>
                    <img src="/src/assets/images/igex_transparent.png" alt="igex logo" className="imageLogo" />
                </div>

            )
        }

        
        
      
    </LandingPageStyles>
  );
};

export default LandingPage;

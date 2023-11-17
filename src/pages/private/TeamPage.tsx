import { TeamPageStyles } from ".";
import { useConsentContext } from "../../hooks/useContextHook";
import ModalCookies from '../../components/modal/ModalCookies';

const TeamPage = () => {
  const { cookiesConsent } = useConsentContext();

  return (
    <TeamPageStyles>
      <div className="teamPageContainer">
        <div className="teamPageContainer__titleContainer">
          <h2 className="teamPageContainer__titleContainer_title">Our Team</h2>
        </div>
        <div className="teamPageContainer__videoContainer">
          {cookiesConsent ? <video className="teamPageContainer__videoContainer_video" src={import.meta.env.VITE_VIDEO_TEAM} autoPlay={true} controls></video>:
          <>
            <div className="teamPageContainer__textAlternative">
              <p className="teamPageContainer__textAlternative_paragraph">Please accept our terms to show the video player:  </p> <ModalCookies/>
            </div>
            <div className="teamPageContainer__imagesAlternative">
              <img src={import.meta.env.VITE_IMAGE_TEAM_1} className="teamPageContainer__imagesAlternative_image" alt="Image team 1" />
              <img src={import.meta.env.VITE_IMAGE_TEAM_2} className="teamPageContainer__imagesAlternative_image" alt="Image team 2" />
              <img src={import.meta.env.VITE_IMAGE_TEAM_3} className="teamPageContainer__imagesAlternative_image" alt="Image team 3" />
            </div>
          </>
          }
        </div>
      </div>
    </TeamPageStyles>
  );
};

export default TeamPage;

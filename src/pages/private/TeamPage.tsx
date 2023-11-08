import { TeamPageStyles } from ".";

const TeamPage = () => {
  return (
    <TeamPageStyles>
      <div className="teamPageContainer">
        <div className="teamPageContainer__titleContainer">
          <h2 className="teamPageContainer__titleContainer_title">Our Team</h2>
        </div>
        <div className="teamPageContainer__videoContainer">
          <video className="teamPageContainer__videoContainer_video" src={import.meta.env.VITE_VIDEO_TEAM} autoPlay={true} controls></video>
        </div>
      </div>
    </TeamPageStyles>
  );
};

export default TeamPage;

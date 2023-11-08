import { imageLogo } from "../../assets/images";
import HomePageStyles from "./homePage.styles";

const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="homePage">
        <div className="homePage__titleContainer"> <span className="homePage__titleContainer_span"><img className="homePage__titleContainer_span_img" src={imageLogo} alt="Logo Image" /></span><h1 className="homePage__titleContainer_title">IGEX</h1></div>
        <div className="homePage__container">
          <p className="homePage__container_paragraph">
            We are holding company. Participate in businesses related with Ocean resources. Sea water, minerals, protein production, health, and beauty. Sustainable aproach to humanity's great
            challenge: conquer the ocean. Join in this exiting trip. Let's do it.
          </p>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;

import { MediaPageStyles } from ".";
import {default as igexImage} from "../../../public/IgexImage.jpg"

const MediaPage = () => {
  return (
    <MediaPageStyles>
      <div className="mediaPageContainer">
        <h2>MediaPage</h2>
        <div className="mediaPageContainer__content">
          <div className="mediaPageContainer__content_videoContainer">
            1 <img src={igexImage} alt="test" className="mediaPageContainer__content_videoContainer_image" />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            2 <img src={igexImage} alt="test" className="mediaPageContainer__content_videoContainer_image" />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            3 <img src={igexImage} alt="test" className="mediaPageContainer__content_videoContainer_image" />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            4 <img src={igexImage} alt="test" className="mediaPageContainer__content_videoContainer_image" />
          </div>
        </div>
      </div>
      <img src="" alt="" />
    </MediaPageStyles>
  );
};

export default MediaPage;

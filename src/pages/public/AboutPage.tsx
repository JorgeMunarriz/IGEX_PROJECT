import { useState } from "react";
import { AboutPageStyles } from ".";
import * as image from "../../assets/images";

const AboutPage = () => {
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string | undefined>(undefined);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const videoData = [
    {
      id: 1,
      src: import.meta.env.VITE_VIDEO_1,
      text: "CEO"
    },
    {
      id: 2,
      src: import.meta.env.VITE_VIDEO_2,
      text: "OCEAN"
    },
    {
      id: 3,
      src: import.meta.env.VITE_VIDEO_3,
      text: "HOLDING"
    },
    {
      id: 4,
      src: import.meta.env.VITE_VIDEO_4,
      text: "SAINT ANDREWS"
    },
    {
      id: 5,
      src: import.meta.env.VITE_VIDEO_5,
      text: "BUSSINESSES"
    },
    {
      id: 6,
      src: import.meta.env.VITE_VIDEO_6,
      text: "FLAMINGO"
    },
  ];

  const toggleVideo = (videoSrc: string | undefined) => {
    setSelectedVideoSrc(videoSrc);
    setIsVideoVisible(!!videoSrc);
  };

  return (
    <AboutPageStyles>
      <div className="aboutPageContainer">
        <div className="aboutPageContainer__titleContainer">
        <h2 className="aboutPageContainer__titleContainer_title">About us</h2>

        </div>
        <div className="aboutPageContainer__content">
          {videoData.map((item) => (
            <div className="aboutPageContainer__content_videoContainer" key={item.id}>
              <img src={image[`image_${item.id}` as keyof typeof image]} alt="test" className="aboutPageContainer__content_videoContainer_image" onClick={() => toggleVideo(item.src)} />
              <div className="aboutPageContainer__content_videoContainer_titleContainer">
              <h4 className="aboutPageContainer__content_videoContainer_titleContainer_title">{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className={`videoPlayer ${isVideoVisible ? "active" : ""}`} id="videoPlayerContainer">
        {isVideoVisible && (
          <>
            <video className="videoPlayer__video" src={selectedVideoSrc} autoPlay={true} controls></video>
            <img src={image.close_image} alt="Ícono de Cerrar" className="close" onClick={() => toggleVideo(undefined)} />
          </>
        )}
      </section>
    </AboutPageStyles>
  );
};

export default AboutPage;

import { useState } from "react";
import { MediaPageStyles } from ".";
import * as image from "../../../public/";

const MediaPage = () => {
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string | undefined>(undefined);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const videoData = [
    {
      id: 1,
      src: import.meta.env.VITE_VIDEO_1,
    },
    {
      id: 2,
      src: import.meta.env.VITE_VIDEO_2,
    },
    {
      id: 3,
      src: import.meta.env.VITE_VIDEO_3,
    },
    {
      id: 4,
      src: import.meta.env.VITE_VIDEO_4,
    },
    {
      id: 5,
      src: import.meta.env.VITE_VIDEO_5,
    },
    {
      id: 6,
      src: import.meta.env.VITE_VIDEO_6,
    },
  ];

  const toggleVideo = (videoSrc: string | undefined) => {
    setSelectedVideoSrc(videoSrc);
    setIsVideoVisible(!!videoSrc);
  };

  return (
    <MediaPageStyles>
      <div className="mediaPageContainer">
        <h2 className="mediaPageContainer__title">Our Team</h2>
        <div className="mediaPageContainer__content">
          {videoData.map((item) => (
            <div className="mediaPageContainer__content_videoContainer" key={item.id}>
              <img
                src={image[`image_${item.id}` as keyof typeof image]}
                alt="test"
                className="mediaPageContainer__content_videoContainer_image"
                onClick={() => toggleVideo(item.src)}
              />
            </div>
          ))}
        </div>
      </div>
      <section className={`videoPlayer ${isVideoVisible ? "active" : ""}`} id="videoPlayerContainer">
        {isVideoVisible && (
          <>
            <video className="videoPlayer__video" src={selectedVideoSrc} autoPlay={false} controls></video>
            <img
              src={image.close_image}
              alt="Ícono de Cerrar"
              className="close"
              onClick={() => toggleVideo(undefined)}
            />
          </>
        )}
      </section>
    </MediaPageStyles>
  );
};

export default MediaPage;

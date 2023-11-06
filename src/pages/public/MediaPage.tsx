import { useState } from "react";
import { MediaPageStyles } from ".";
import * as image from "../../../public/";

const MediaPage = () => {
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string | null>(null)


  const video_1: string | null = import.meta.env.VITE_VIDEO_1;
  const video_2: string | null = import.meta.env.VITE_VIDEO_2;
  const video_3: string | null = import.meta.env.VITE_VIDEO_3;
  const video_4: string | null = import.meta.env.VITE_VIDEO_4;
  const video_5: string | null = import.meta.env.VITE_VIDEO_5;
  const video_6: string | null = import.meta.env.VITE_VIDEO_6;


  const toggleVideo = (videoSrc: string | null) => {

    const video = document.querySelector("#videoPlayerContainer") as HTMLVideoElement;
    const selectedVideo = document.querySelector("#selectedVideo") as HTMLVideoElement;
    setSelectedVideoSrc(videoSrc)
    video?.classList.toggle("active");
    selectedVideo.currentTime = 0;
    selectedVideo.pause();
  };

  return (
    <MediaPageStyles>
      <div className="mediaPageContainer">
        <h2 className="mediaPageContainer__title">Our Team</h2>
        <div className="mediaPageContainer__content">
          <div className="mediaPageContainer__content_videoContainer">
            <img src={image.image_1} alt="test" className="mediaPageContainer__content_videoContainer_image" onClick={()=>toggleVideo(video_1)} />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            <img src={image.image_2} alt="test" className="mediaPageContainer__content_videoContainer_image" onClick={()=>toggleVideo(video_2)} />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            <img src={image.image_3} alt="test" className="mediaPageContainer__content_videoContainer_image" onClick={()=>toggleVideo(video_3)} />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            <img src={image.image_4} alt="test" className="mediaPageContainer__content_videoContainer_image" onClick={()=>toggleVideo(video_4)} />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            <img src={image.image_5} alt="test" className="mediaPageContainer__content_videoContainer_image" onClick={()=>toggleVideo(video_5)} />
          </div>
          <div className="mediaPageContainer__content_videoContainer">
            <img src={image.image_6} alt="test" className="mediaPageContainer__content_videoContainer_image" onClick={()=>toggleVideo(video_6)} />
          </div>
        </div>
      </div>
      <section className="videoPlayer" id="videoPlayerContainer">
        {selectedVideoSrc && (
          <>
            <video src={selectedVideoSrc} autoPlay={false} controls></video>
            <img
              src={image.close_image}
              alt="Ícono de Cerrar"
              className="close"
              onClick={() => toggleVideo(null)}
            />
          </>)
        }
      </section>
    </MediaPageStyles>
  );
};

export default MediaPage;

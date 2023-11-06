import styled from "styled-components";

const MediaPageStyles = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  overflow-y: auto;
  .mediaPageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      height: 100%;
      &_videoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_image {
          width: 300px;
          height: 180px;
          cursor: pointer;
        }
      }
    }
  }
  /* .play {
  position: absolute;
  bottom: 50px;
  left: 100px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1.2em;
  cursor: pointer;
  img {
    margin-right: 10px;
    max-width: 50px;
  }
} */
  .videoPlayer {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    width: 100%;
    height: 100%;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(20px);
    visibility: hidden;
    opacity: 0;
    &.active {
      display: flex;
      visibility: visible;
      opacity: 1;
    }
    &__video {
      max-width: 900px;
      outline: none;
      border-radius: 5px;
    }
  }
  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    filter: invert(1);
    max-width: 32px;
  }

  @media (max-width: 991px) {
    .videoPlayer {
      &__video {
        max-width: 90%;
      }
    }
  }
`;

export default MediaPageStyles;

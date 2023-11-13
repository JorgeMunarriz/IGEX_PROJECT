import styled from "styled-components";

const AboutPageStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  overflow-y: auto;
  .aboutPageContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &__titleContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      &_title {
        font-weight: 100;
      }
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6rem;
      flex-wrap: wrap;
      height: 100%;
      padding-top: 2rem;
      &_videoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        &_image {
          width: 450px;
          height: 250px;
          cursor: pointer;
        }
        &_titleContainer {
          text-align: center;
          &_title {
            font-size: 1rem;
            font-weight: 200;
          }
        }
      }
    }
  }

  .videoPlayer {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    width: 100%;
    height: 100%;
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
      max-width: 90%;
      outline: none;
      border-radius: 5px;
      
      &_consentRejected {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        background: var(--background-light);
        width: 80vw;
        height: 200px;
        border-radius: 5px;
      }
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
    .aboutPageContainer {
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

    .videoPlayer {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
      width: 100%;
      height: 100%;
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
        max-width: 95%;
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
    .videoPlayer {
      &__video {
        max-width: 100%;
      }
    }
  }
`;

export default AboutPageStyles;

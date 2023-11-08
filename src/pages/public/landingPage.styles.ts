import styled from "styled-components";
import { Flamingo } from "../../assets/images";


const LandingPageStyles = styled.div`
  background-color: var(--background-lineal-gradient);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .background {
    background-color: var(--background-lineal-gradient);
    width: 100vw;
    height: 100vh;
    background-image: url(${Flamingo});
    background-position: center;
    background-repeat: no-repeat;
    animation: blurBackground 2.5s linear 2.5s forwards;
    background-size: cover;
    &__video {
      width: 0%;
      height: 0%;
    }

    &__btnLink {
      position: absolute;
      bottom: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      padding: 10px;
      width: 150px;
      background-color: var(--background-dark);
      color: #fff;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s;
      text-overflow: ellipsis;
      svg {
        width: 15px;
        height: 15px;
      }
      &:hover {
        background-color: var(--background-dark-hover);
      }
    }
  }

  .background__title {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 100px;
    animation: showLogo 2.5s linear;
    text-align: center;
    z-index: 100;
    filter: blur(0);
    font-size: 3vw;
    font-family: 'Lato', sans-serif;
    font-weight: 300 ;
    letter-spacing: 1vw;
  }
  .active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    filter: blur(0);
  }

  .imageLogo {
    width: 200px;
    height: 200px;
    position: relative;
    animation: showLogo 3.5s linear;
    z-index: 100;
    filter: blur(0);
  }

  @media (width < 768px) {
    

    .background {
    background-color: var(--background-lineal-gradient);
    width: 100vw;
    height: 100vh;
    background-image: url(${Flamingo});
    background-position: center;
    background-repeat: no-repeat;
    animation: blurBackground 2.5s linear 2.5s forwards;
    background-size: cover;
    &__video {
      width: 0%;
      height: 0%;
    }

    &__btnLink {
      position: absolute;
      bottom: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 0.5rem;
      padding: 10px;
      width: 150px;
      background-color: var(--background-dark);
      color: #fff;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s;
      text-overflow: ellipsis;
      svg {
        width: 15px;
        height: 15px;
      }
      &:hover {
        background-color: var(--background-dark-hover);
      }
    }
  }

  .background__title {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 100px;
    animation: showLogo 2.5s linear;
    text-align: center;
    z-index: 100;
    filter: blur(0);
    font-size: 4vw;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
  }
  .active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    filter: blur(0);
  }

  .imageLogo {
    width: 200px;
    height: 200px;
    position: relative;
    animation: showLogo 3.5s linear;
    z-index: 100;
    filter: blur(0);
  }
  }

  @keyframes showLogo {
    0% {
      opacity: 0;
      filter: blur(8px);
    }
    25% {
      opacity: 0.25;
      filter: blur(4px);
    }
    50% {
      opacity: 0.5;
      filter: blur(2px);
    }
    75% {
      opacity: 0.75;
      filter: blur(1px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blurBackground {
    0% {
      filter: blur(0);
      opacity: 1;

    }
    100% {
      filter: blur(4px);
      opacity: 0.5;

    }
  }
`;

export default LandingPageStyles;

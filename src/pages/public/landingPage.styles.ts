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
    width: 100%;
    height: 100%;
    background-image: url(${Flamingo});
    background-position: center;
    background-repeat: no-repeat;
    animation: blurBackground 2.5s linear 2.5s forwards;
  }

  .active {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    filter: blur(0)
  }
  
  .imageLogo {
    width: 100px;
    height: 100px;
    position: relative;
    animation: showLogo 2.5s linear;
    z-index: 100;
    filter: blur(0)
  }

  @keyframes showLogo {
    0% {
      
      opacity: 0;
    }
    25% {
      opacity: 0.25
    }
    50% {
      opacity: 0.5
    }
    75% {
      opacity: 0.75
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blurBackground {
    0% {
      
        filter: blur(0);
        
      
    }
    100% {
      
        filter: blur(4px);
        
      
    }
  }
`;

export default LandingPageStyles;

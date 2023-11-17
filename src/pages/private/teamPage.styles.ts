import styled from "styled-components";

const TeamPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .teamPageContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    &__titleContainer {
      padding: 2rem;
      &_title {
        font-weight: 100;
      }
    }
    &__videoContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      padding: 2rem;

      &_video {
        max-width: 900px;
        width: 100%;
        padding: 2rem;
      }
    }
    &__textAlternative {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      gap: 0.5rem;
      &_paragraph{
        font-size: 1rem;
      }
    }
    &__imagesAlternative {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      gap: 0.5rem;
      &_image{
        width: 14%;
      }
    }
  }

  @media only screen and (max-width: 700px){
    .teamPageContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;

      &__videoContainer {
        padding: 0;
        &_video {
          max-width: 100%;
          padding: 0;
        }
      }
      &__textAlternative {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      gap: 0.5rem;
      &_paragraph{
        font-size: 1rem;
      }
    }
    &__imagesAlternative {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      gap: 0.5rem;
      &_image{
        width: 30%;
        height: 80%;
      }
    }
    }
  }
  
  @media only screen and (orientation: landscape) {
    .teamPageContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;

      &__videoContainer {
        padding: 0;
        &__video {
          max-width: 100%;
        }
      }
    }
  }
`;

export default TeamPageStyles;

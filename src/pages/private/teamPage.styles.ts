import styled from "styled-components";

const TeamPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* padding: 2rem; */

  .teamPageContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    &__titleContainer{
      padding: 2rem;
      &_title{
      font-weight: 100;

      }

    }
    &__videoContainer{
      display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100%;

      &_video {
        max-width: 1200px;
        width: 100%;
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

    
    &__video {
      max-width: 45%;
    }
  }
}
`;

export default TeamPageStyles;

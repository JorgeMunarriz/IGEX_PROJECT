import styled from "styled-components";

const TeamPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;

  .teamPageContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 100%;

    
    &__video {
      max-width: 90%;
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

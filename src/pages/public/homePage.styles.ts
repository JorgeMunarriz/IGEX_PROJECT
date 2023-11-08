import styled from "styled-components";

const HomePageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem; 
  width: 100%;
  height: 100%;

  .homePage {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    &__titleContainer {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-align: center;
      &_span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        &_img {
          width: 100%;
          height: 100%;
        }
      }
      &_title {
        font-size: 3rem;
        font-weight: 500;
        text-align: center;
      }
    }
    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 41vw;
      height: 100%;
      &_paragraph {
        text-align: center;
        font-size: 1.55vw;
        font-weight: 100;
      }
    }
  }

  @media (width < 768px) {
    .homePage {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      &__title {
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
      }
      &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 75vw;
        height: 100%;
        &_paragraph {
          text-align: center;
          font-size: 5.5vw;
          font-weight: 100;
        }
      }
    }
  }
`;

export default HomePageStyles;

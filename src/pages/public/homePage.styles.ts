import styled from "styled-components";
import { default as flamingoBlur } from "../../../public/flamingo_full.png";

const HomePageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  /* background-image: url(${flamingoBlur});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fill; */
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
        font-size: 3.5vw;
      }
    }
  }
`;

export default HomePageStyles;

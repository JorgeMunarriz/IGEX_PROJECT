import styled from "styled-components";

const MediaPageStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  .mediaPageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      &_videoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &_image {
          width: 300px;
          height: 180px;
        }
      }
    }
  }
`;

export default MediaPageStyles;

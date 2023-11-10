import styled from "styled-components";

const PressPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .pressPage {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    &__titleContainer {
      text-align: center;
      &_title {
        font-weight: 100;
      }
    }
  }
`;

export default PressPageStyles;

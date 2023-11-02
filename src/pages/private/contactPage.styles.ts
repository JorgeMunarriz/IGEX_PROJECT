import styled from "styled-components";

const ContactPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  .formContainer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 80vw;
    height: 80%;
    &__form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 80%;
      height: 80%;

      &_div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        &_label {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark);
          padding: 0.5rem;
        }
        &_input {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          border: 1px solid black;
          border-radius: 3px;
          width: 100%;
        }
        &_textarea {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 100%;
          min-height: 4vh;
        }
        &_btnSend {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 0.5rem;
          padding: 4px;
          width: 75px;
          color: #fff;
          border: none;
          border-radius: 20px;
          /* cursor: pointer; */
          transition: all 0.3s;
          /* background-color: rgba(0,0,0,0.4); */
          /* & .active{

            background-color: var(--background-dark);
            &:hover {
              background-color: var(--background-dark-hover);
            }
          } */
        }
      }
    }
  }
`;

export default ContactPageStyles;

import styled from "styled-components";

const ContactPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80%;
    &__title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
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
          border: none;
          outline: none;
          border-radius: 15px;
          padding: 1em;
          background-color: #ccc;
          box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
          transition: 300ms ease-in-out;
          &:focus {
            background-color: white;
            transform: scale(1.05);
            box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
          }
        }

        &_textarea {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 100%;
          min-height: 4vh;
          border: none;
          outline: none;
          border-radius: 15px;
          padding: 1em;
          background-color: #ccc;
          box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
          transition: 300ms ease-in-out;
          &:focus {
            background-color: white;
            transform: scale(1.05);
            box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
          }
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
          transition: all 0.3s;
          background-color: var(--background-dark);
           

            background-color: var(--background-dark);
            &:hover {
              background-color: var(--background-dark-hover);
            }
          &:focus{
            background-color: var(--background-darkest);
          }
          &:disabled{
            background-color: var(--background-light);
          }
        }
      }
    }
  }
`;

export default ContactPageStyles;

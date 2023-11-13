import styled, { css } from "styled-components";
export const ModalStyles = styled.div`
  display: flex;
  .modal__btn-open {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    background-color: initial;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: underline;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  width: 90vw;  
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  .cookiesPage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    &__closeContainer {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      &_button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.9);
        border-radius: 5px;
        overflow: hidden;
      }
    }
    &__header {
      display: flex;
      flex-direction: column;
      width: 100%;
      &__titleContainer {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        &_title {
          font-size: 2.5rem;
        }
      }
      &__goBackContainer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &_button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 10px;
          width: 100px;
          padding: 8px;
          background-color: var(--background-dark);
          color: #fff;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          &:hover {
            background-color: var(--background-dark-hover);
          }
        }
      }

      &__acceptOrRejectContainer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;
        &_acceptBtn {
          margin-top: 10px;
          width: 100px;
          padding: 8px 16px;
          background-color: rgba(0, 123, 250, 0.8);
          color: #fff;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 123, 250, 0.6);
          }
        }
        &_rejectBtn {
          margin-top: 10px;
          width: 100px;
          padding: 8px 16px;
          background-color: var(--background-dark);
          color: #fff;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          &:hover {
            background-color: var(--background-dark-hover);
          }
        }
      }
    }
    &__main{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      &_paragraph{
        font-size: 1rem;
        &_link{
          font-size: 1rem;
          font-weight: 500;
          text-decoration: underline;
          color: #000;
        }
      }
    }

    &__formContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2vw;
      width: 100%;
      border: 1px solid black;
      &_div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &_textContainer{
          display: flex;
          flex-direction: column;

          &_label {
            font-size: 1rem;
            color: rgba(50, 50, 50, 0.8);
          }
          &_span {
            font-size: 1rem;
            color: rgba(0, 0, 0, 1);
            border-radius: 5px;
          }
        }
      }
      &_btnSave {
        margin-top: 10px;
        width: 200px;
        padding: 8px 16px;
        background-color: rgba(0, 123, 250, 0.8);
        color: #fff;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 123, 250, 0.6);
        }
      }
    }
  }

  .checkbox {
    position: relative;
    width: 50px;
    height: 25px;
    margin: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .checkbox label {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 25px;
    border-radius: 50px;
    background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .checkbox label:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .checkbox input[type="checkbox"]:checked + label {
    background: linear-gradient(to bottom, #4cd964, #5de24e);
  }

  .checkbox input[type="checkbox"]:checked + label:after {
    transform: translateX(25px);
  }

  .checkbox label:hover {
    background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
  }

  .checkbox label:hover:after {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .yep {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 25px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    .cookiesPage{
      width: 100%;
    }
  }
`;

export const Checkbox = styled.input`
  // Estilo común para el checkbox
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 25px;

  // Estilos condicionales para cambiar el fondo y la posición
  ${({ checked }) =>
    checked
      ? css`
          & + label {
            background: linear-gradient(to bottom, #4cd964, #5de24e);
          }
          & + label:after {
            transform: translateX(25px);
          }
        `
      : css`
          & + label {
            background: linear-gradient(to bottom, #b3b3b3, #e6e6e6);
          }
          & + label:after {
            transform: translateX(0);
          }
        `}
`;

export const ModalButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  width: 200px;
  background-color: rgba(50, 50, 50, 0.8);
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(50, 50, 50, 0.6);
  }
`;

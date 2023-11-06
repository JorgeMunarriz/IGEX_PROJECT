import styled from "styled-components";

export const FooterStyles = styled.footer`
  grid-area: 10 / 1 / 11 / 11;
  background-color: rgba(50, 50, 50, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 0.5rem;
    &__dropdown {
      display: none;
      align-items: flex-start;
      justify-content: flex-start;
      &_button {
        font-size: 3rem;
        padding: 3px;
        background: var(--background-light);
        border: 1px solid var(--background-dark);
        border-radius: 20px;
        transition: all 0.3s ease;
        &:hover {
          background: var(--background-light-hover);
        }
      }
    }
    &__header {
      display: flex;
      align-items: center;
      &-socialmedia {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        &-list {
          display: flex;
          &-link {
            font-size: 30px;
            svg {
              path {
                transition: all 0.3s ease-in-out;
                color: rgba(250, 250, 250, 0.6);
              }
            }
            &:hover svg path {
              color: rgba(250, 250, 250, 1);
            }
          }
        }
      }
    }
    &__main {
      display: flex;
      &-terms {
        display: flex;
        gap: 1rem;

        &-list {
          color: rgba(250, 250, 250, 1);
        }
      }
    }
    &__footer {
      &-copyright {
        color: rgba(250, 250, 250, 1);
      }
    }
  }

  @media (width < 768px) {
    .footer {
      display: flex;
      opacity: 0;
      transform: scaleY(0);
      transform-origin: left;
      transition: all 0.5s ease-in-out;
      height: 60px;
      &__dropdown {
        display: flex;
      }
      &__main-terms {
        padding: 0.5rem;
        flex-direction: column;
        gap: 0.75rem;
      }
    }

    .active {
      position: sticky;
      bottom: 0;
      opacity: 1;
      transform: scaleY(1);
      transition: all 0.5s ease-in-out;
      height: 200px;
    }
  }
`;

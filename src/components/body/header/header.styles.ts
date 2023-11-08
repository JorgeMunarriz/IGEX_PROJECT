import styled from "styled-components";

export const HeaderStyles = styled.header`
  grid-area: 1 / 1 / 2 / 11;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vw 2vw;
  .header__left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    padding: 5px;
    background-color: var(--background-dark);
    color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 20px;
    transition: all 0.4s ease-in-out;
    gap: 1rem;
    &-title {
      font-size: 1rem;
      font-weight: 100;
    }
    &:hover {
      background-color: var(--background-dark-hover);
      color: rgba(250, 250, 250, 1);
    }
  }

  .header__right {
    display: flex;
    padding: 0 0 0 6vw;
    &_nav {
      display: flex;
      gap: 0.5rem;
      &_ul {
        display: flex;
        gap: 6vw;
        &_list {
          &_link {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 0.5rem;
            padding: 5px;
            width: 75px;
            background-color: var(--background-dark);
            color: #fff;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
            text-overflow: ellipsis;
            svg {
              width: 15px;
              height: 15px;
            }
            &:hover {
              background-color: var(--background-dark-hover);
            }
          }
        }
      }
    }
    &_dropdown {
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
        overflow: hidden;
        &:hover {
          background: var(--background-light-hover);
        }
      }
    }
  }

  @media (width < 768px) {
    justify-content: space-evenly;
    .header__right {
      width: 50%;

      &_dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &_nav {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: scaleY(0);
        transform-origin: left;
        transition: all 0.5s ease-in-out;
        margin: 0 auto;
        /* padding-top: 3rem; */
        flex-direction: column;
        height: 60px;
        &_ul {
          flex-direction: column;
          gap: 3vw;
        }
      }
    }
    .active {
      position: sticky;
      bottom: 0;
      opacity: 1;
      transform: scaleY(1);
      transition: all 0.5s ease-in-out;
      height: 150px;
    }
  }
`;

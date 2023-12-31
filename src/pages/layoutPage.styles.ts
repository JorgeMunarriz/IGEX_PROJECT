import styled from 'styled-components';
import { flamingoBlur } from '../assets/images';



export const LayoutPage = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-image: url(${flamingoBlur});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fill;
  grid-gap: 0;
  width: 100%;
  height: 100%;
  .regularPages__grid{
    grid-area: 2 /1 / 10 / 11;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding:  2rem 0;
  }
  
`;





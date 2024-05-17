
import { createGlobalStyle } from 'styled-components/native';

export const colors = {
  red: '#E10613', 

};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    border: none;
    outline: none;
    font-size: 100%;
    vertical-align: baseline;
    transition: transform 0.3s ease;
  }

  /* body {
    background-color: ${colors.primary};
  } */
`;

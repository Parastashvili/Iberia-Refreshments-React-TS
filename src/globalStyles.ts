import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&display=swap');
    background-color: green;
  }
`;

export default GlobalStyle;

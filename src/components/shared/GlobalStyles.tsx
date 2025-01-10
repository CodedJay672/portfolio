import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
   text-decoration: none;
   color: #000;
  }
   
  html {
    scroll-behavior: smooth;
  }

  #root {
    font-family: 'Inter', sans-seriff;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    $overflow: hidden;
  }
`;

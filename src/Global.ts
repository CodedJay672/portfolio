import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 200px;
  text-align: center;
  color: #3c3e67;
  }
  
  #root {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    background-color: #fff;
    font-variation-settings: "slnt" 0;
    font-optical-sizing: auto;
    position: relative;
  }
`;

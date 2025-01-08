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

  #root {
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    font-family: "Inter", sans-serif;
    font-variation-settings: "slnt" 0;
    font-optical-sizing: auto;
    background-olor: #fff;
    
    @media(max-width: ${({ theme }) => theme.color.md}) {
      padding: 0 1rem;
      font-size: 0.9rem;
    }

    @media(max-width: ${({ theme }) => theme.color.sm}) {
      padding: 0 0.5rem;
      font-size: 0.8rem;
    }

    @media(max-width: ${({ theme }) => theme.color.lg}) {
      padding: 0 2rem;
      font-size: 1rem;
    }

    @media(max-width: ${({ theme }) => theme.color.xl}) {
      padding: 0 3rem;
      font-size: 1.1rem;
    }
  }
`;

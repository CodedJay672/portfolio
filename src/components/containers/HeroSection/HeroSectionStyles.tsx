import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1600px;
  position: relative;
  padding: 1rem 160px;

  &::before {
    position: absolute;
    content: "";
    top: 103px;
    left: 240px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    outline: none;
    background-color: #3c3e67;
    box-shadow: 10px 10px 50px 50px #3c3e67;
    z-index: 0;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: 103px;
    left: 600px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    outline: none;
    background-color: #c1a774;
    box-shadow: 10px 10px 50px 50px #c1a774;
    z-index: 0;
  }

  transition: all;
`;

export const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90dvh;
  max-height: 1080px;
  z-index: 10;
`;

export const HeroText = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  max-width: 519.8px;
`;

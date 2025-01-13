import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
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

    @media screen and (max-width: 1040px) {
      left: 110px;
      top: 200px;
    }

    @media screen and (max-width: 900px) {
      left: 110px;
      top: 200px;
    }
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

    @media screen and (max-width: 1040px) {
      left: 850px;
      bottom: 110px;
    }

    @media screen and (max-width: 900px) {
      left: 700px;
      bottom: 110px;
    }
  }

  transition: all;

  @media screen and (max-width: 1040px) {
    padding: 1rem 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 1rem 33px;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 16px;
  }
`;

export const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90dvh;
  max-height: 1080px;
  z-index: 10;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroText = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  max-width: 519.8px;

  @media screen and (max-width: 1040px) {
    max-width: 400px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    order: 2;
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const HeroImgContainer = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #3c3e67;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 1040px) {
    width: 400px;
    height: 400px;
  }

  @media screen and(max-width: 900px) {
    width: 300px;
    height: 300px;
    order: 1;
  }
`;

export const HeroButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 33px 0;
  gap: 6px;

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    height: max-content;
    gap: 20px;
  }
`;

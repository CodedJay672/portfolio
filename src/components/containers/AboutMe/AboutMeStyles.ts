import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 160px;

  @media screen and (max-width: 1040px) {
    padding: 5rem 88px;
  }

  @media screen and (max-width: 900px) {
    padding: 1rem 33px;
    height: auto;
  }
`;

export const AboutContentSection = styled.section`
  width: 100%;
  display: flex;
  gap: 50px;
  flex: flex-1;
  overflow: hidden;
  margin: 46px 0 0 0;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 33px;
    overflow: scroll;
  }

  @media screen and (max-width: 900px) {
    margin-top: 20px;
    padding: 0;
  }
`;

export const ImageDiv = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    height: 400px;
  }
`;

export const AboutContentDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

export const TabHeader = styled.div`
  width: 100%;
  padding: 6px;
  border: 1px solid #e9e9e9;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
`;

export const ImgCover = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid black;
  z-index: 10;
`;

export const Span = styled.span`
  color: #3c3e67;
  text-align: center;
  width: 200px;
  padding: 10px 20px;
  border-radius: 44px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: #3c3e670a;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 14px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + label {
    background-color: #3c3e67a1;
    color: #fff;

    transition: 0.2s ease-in;
  }
`;

export const ContentDiv = styled.section`
  width: 100%;
  height: 300px;
  overflow: auto;
`;

export const LinkedInFollow = styled.a`
  width: 50%;
  padding: 6px;
  margin-top: 16px;
  color: #fff;
  font-size: 14.6px;
  font-weight: 400p;
  background-color: #0f172a;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  border: none;
  border-radius: 30px;

  cursor: pointer;

  &:hover {
    background-color: #0f172a;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

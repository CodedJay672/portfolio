import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 1rem 160px 3rem 160px;

  @media screen and (max-width: 1040px) {
    padding: 4rem 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 3rem 33px;
  }
`;

export const ContactDiv = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeadingText = styled.h2`
  font-size: 35.2px;
  color: #0f172a;
  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 1040px) {
    font-size: 30px;
    line-height: 32px;
  }

  @media screen and (max-width: 900px) {
    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const SubtleText = styled.p`
  font-size: 21px;
  line-height: 20px;

  @media screen and (max-width: 1040px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const ContactLink = styled.a`
  font-size: 16px;
  font-weight: 400px;
  line-height: 24px;

  @media screen and (max-width: 1040px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (max-width: 900px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const ContactInfo = styled.div`
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ContactDetails = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #0f172a;
  line-height: 20px;

  @media screen and (max-width: 1040px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (max-width: 900px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const ContactImage = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

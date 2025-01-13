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

export const HeadingText = styled.h2`
  font-size: 35.2px;
  color: #0f172a;

  @media screen and (max-width: 1040px) {
    font-size: 30px;
    line-height: 32px;
  }

  @media screen and (max-width: 900px) {
    font-size: 24px;
    line-height: 30px;
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
`;

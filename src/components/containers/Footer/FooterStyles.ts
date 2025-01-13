import styled from "styled-components";

export const FooterWrapper = styled.section`
  padding: 4rem 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3c3e670a;
  width: 100%;
  gap: 44px;

  @media screen and (max-width: 1040px) {
    padding: 4rem 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 4rem 33px;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  font-weight: 300px;
  font-size: 11px;
  color: #3c3e67af;
`;

export const FooterLink = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3c3e6701;
  border-radius: 50%;
  transition: 0.3s ease-in;

  &:hover {
    background-color: #3c3e670f;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;

    gap: 20px;
  }
`;

export const FooterText = styled.p`
  font-size: 13.8px;
  font-weight: 400;
  color: #3c3e67af;
  line-height: 24px;
  text-align: center;
`;

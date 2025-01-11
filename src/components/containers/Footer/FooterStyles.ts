import styled from "styled-components";

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

import styled from "styled-components";

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

  &:hover {
    background-color: #3c3e670a;
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
export const AboutMeContent = styled.p`
  line-height: 24px;
  font-size: 14px;
  font-weight: 200;
  color: #3c3e67;
`;

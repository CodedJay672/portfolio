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
`;

import styled from "styled-components";

export const ExperienceWrapper = styled.section`
  padding: 5rem 160px;

  @media screen and (max-width: 1040px) {
    padding: 5rem 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 5rem 33px;
  }
`;

export const ExperienceContentDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: felx-start;
  gap: 10px;
  width: 100%;
  margin-top: 46px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

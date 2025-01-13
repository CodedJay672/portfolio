import styled from "styled-components";

export const ExperienceWrapper = styled.section`
  padding: 5rem 160px;

  @media screen and (max-width: 1040px) {
    padding: 2rem 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 2rem 33px;
  }
`;

export const ExperienceContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 46px 0 0 0;

  @media screen and (max-width: 900px) {
    flex-direction: column;

    gap: 40px;
  }
`;

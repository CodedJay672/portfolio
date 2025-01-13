import styled from "styled-components";

export const SkillsWrapper = styled.section`
  width: 100%;
  padding: 5rem 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1040px) {
    padding: 5rem 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 5rem 33px;
  }
`;

export const SkillDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 10)%;
  margin-top: 46px;

  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

import styled from "styled-components";
import { Img } from "../../shared/styles";

export const ProjectWrapper = styled.section`
  width: 100%;
  padding: 5rem 160px;

  @media screen and (max-width: 1040px) {
    padding: 4rem 33px;
  }

  @media screen and (max-width: 900px) {
    padding: 4rem 43px;
  }
`;

export const ProjectCard = styled.div`
  width: 300.33px;
  height: 425px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1040px), @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const ProjectImg = styled(Img)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Span = styled.span`
  font-size: 14.4px;
  font-weight: 500;
  color: $545454;
  line-height: 24px;
  text-align: center;
  display: block;
  margin-top: 10px;
`;

export const ProjectDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  margin: 40px auto;
  flex-wrap: wrap;

  @media screen and (max-width: 1040px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    place-items: center;
  }

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    place-items: center;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    place-items: center;
  }
`;

export const ProjectLink = styled.a<{
  $bg?: string;
  $color?: string;
  $size?: string;
  $weight?: string;
  $leading?: string;
  $tracking?: string;
}>`
  padding: 4px 16px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.$bg ?? props.$bg};
  color: ${(props) => props.$color ?? props.$color};
  font-size: ${(props) => props.$size ?? props.$size};
  font-weight: ${(props) => props.$weight ?? props.$weight};
  line-height: ${(props) => props.$leading ?? props.$leading};
  letter-spacing: ${(props) => props.$tracking ?? props.$tracking};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

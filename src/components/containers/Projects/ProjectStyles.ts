import styled from "styled-components";
import { Div, Img } from "../../shared/styles";

export const ProjectCard = styled.div`
  width: 300.33px;
  height: 425px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  overflow: hidden;
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

export const ProjectDiv = styled(Div)`
  flex-wrap: wrap;
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

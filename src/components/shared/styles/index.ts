import styled from "styled-components";

export const P = styled.p<{
  $size: string;
  "$line-height": string;
  $weight: string;
  $color: string;
  $truncate?: number;
}>`
  line-height: ${(props) => props["$line-height"]};
  font-size: ${(props) => props.$size};
  font-weight: ${(props) => props.$weight};
  color: ${(props) => props.$color};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.$truncate ?? props.$truncate};
  text-overflow: ellipsis;
`;

export const ContentSummary = styled.p`
  font-size: 14.5px;
  weight: 300px;
  line-height: 20px;
  color: #3c3e67;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Div = styled.div<{
  $width?: string;
  $height?: string;
  $flex?: string;
  "$flex-direction"?: string;
  "$justify-content"?: string;
  "$align-items"?: string;
  $gap?: string;
  $padding?: string;
  $margin?: string;
  $border?: string;
  "$border-radius"?: string;
  $overflow?: string;
  "$background-color"?: string;
  $grow?: string;
  $shadow?: string;
  $position?: string;
  $top?: string;
  $left?: string;
  $bottom?: string;
  $right?: string;
  $display?: string;
}>`
  width: ${(props) => props.$width ?? props.$width};
  height: ${(props) => props.$height ?? props.$height};
  display: ${(props) => props.$flex ?? props.$flex};
  justify-content: ${(props) =>
    props["$justify-content"] ?? props["$justify-content"]};
  flex-direction: ${(props) =>
    props["$flex-direction"] ?? props["$flex-direction"]};
  align-items: ${(props) => props["$align-items"] ?? props["$align-items"]};
  gap: ${(props) => props.$gap ?? props.$gap};
  padding: ${(props) => props.$padding ?? props.$padding};
  border: ${(props) => props.$border ?? props.$border};
  border-radius: ${(props) =>
    props["$border-radius"] ?? props["$border-radius"]};
  overflow: ${(props) => props.$overflow ?? props.$overflow};
  margin: ${(props) => props.$margin ?? props.$margin};
  background-color: ${(props) =>
    props["$background-color"] ?? props["$background-color"]};
  flex: ${(props) => props.$grow ?? props.$grow};
  box-shadow: ${(props) => props.$shadow ?? props.$shadow};
  position: ${(props) => props.$position ?? props.$position};
  top: ${(props) => props.$top ?? props.$top};
  right: ${(props) => props.$right ?? props.$right};
  bottom: ${(props) => props.$bottom ?? props.$bottom};
  left: ${(props) => props.$left ?? props.$left};
  display: ${(props) => props.$display ?? props.$display};
  scroll-behavior: smooth;
`;

export const Img = styled.img<{
  $width: string;
  $height: string;
  "$object-fit": string;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  object-fit: ${(props) => props["$object-fit"]};
`;

export const Button = styled.button<{
  $width: string;
  $height: string;
  $border?: string;
  "$border-radius": string;
  "$background-color"?: string;
  $color?: string;
  $display?: string;
  "$flex-direction"?: string;
  $gap?: string;
  "$justify-content"?: string;
  "$align-items"?: string;
  $hover?: string;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border: ${(props) => props.$border ?? props.$border};
  border-radius: ${(props) =>
    props["$border-radius"] ?? props["$border-radius"]};
  background-color: ${(props) =>
    props["$background-color"] ?? props["$background-color"]};
  color: ${(props) => props.$color ?? props.$color};
  display: ${(props) => props.$display ?? props.$display};
  justify-content: ${(props) =>
    props["$justify-content"] ?? props["$justify-content"]};
  align-items: ${(props) => props["$align-items"] ?? props["$align-items"]};
  gap: ${(props) => props.$gap ?? props.$gap};
  cursor: pointer;

  &:hover {
    background-color: ${(prop) => prop.$hover ?? prop.$hover};
  }

  transition: 0.2s ease-in-out;
`;

export const H1 = styled.h1<{
  $size?: string;
  $weight?: string;
  $leading?: string;
  $tracking?: string;
}>`
  font-size: ${(props) => props.$size ?? props.$size};
  font-weight: ${(props) => props.$weight ?? props.$weight};
  line-height: ${(props) => props.$leading ?? props.$leading};
  word-spacing: ${(props) => props.$tracking ?? props.$tracking};
`;

export const HomeButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  bottom: 90px;
  right: 50px;
  background-color: #fff;
  box-shadow: 2px 2px 30px 2px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const HeadingTitle = styled.h1`
  font-size: 1.3rem;
  weight: 35.2px;
  leading: 52.8px;

  @media screen and (max-width: 900px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const SkillCard = styled.div`
  width: 176px;
  height: 100px;
  border: 1px dashed #e9e9e9;
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 150px;
    height: 80px;
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 60px;
  }
`;

export const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;

  @media screen and (max-width: 900px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #3c3e67;
  margin-top: 10px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ExperienceCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    gap: 32px;
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
  flex-direction: column;
    padding: 15px;
    gap: 20px;
`;

export const SectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;

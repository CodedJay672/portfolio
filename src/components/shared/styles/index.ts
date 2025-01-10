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
}>`
  width: ${(props) => props.$width ?? props.$width};
  max-width: 1800px;
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
  position: relative;
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

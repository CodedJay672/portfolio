import React from "react";
import { Div, H1, Img, P } from "../styles";

export const SectionTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Div
      $width="100%"
      $flex="flex"
      $flex-direction="column"
      $justify-content="center"
      $align-items="center"
    >
      <H1 $size="35.2px" $weight="35.2px" $leading="52.8px">
        {text}
      </H1>
    </Div>
  );
};

export const ExperienceCard: React.FC<{
  imageUrl: string;
  position: string;
  company: string;
  role: "full-time" | "Part-time";
  range: string;
  location: string;
  description: string;
  type: "Remote" | "Hybrid" | "Onsite";
}> = ({
  imageUrl,
  position,
  company,
  role,
  range,
  location,
  description,
  type,
}) => {
  return (
    <Div
      $width="493px"
      $height="195px"
      $flex="flex"
      $padding="10px"
      $border="1px solid #E9E9E9"
      $border-radius="10px"
      $gap="10px"
    >
      <Div $width="60px" $height="60px">
        <Img
          src={imageUrl}
          alt="logo"
          $width="100%"
          $height="100%"
          $object-fit="contain"
        />
      </Div>
      <Div $width="100%" $overflow="hidden">
        <H1 $size="20.8px" $weight="500" $leading="31.2px">
          {position}
        </H1>
        <P $size="14.4px" $weight="200" $line-height="21.2px" $color="#000">
          {company} - {role}
        </P>
        <P $size="10.4px" $weight="200" $line-height="21.2px" $color="#000">
          {range}
        </P>
        <P $size="10.4px" $weight="200" $line-height="21.2px" $color="#000">
          {location} - {type}
        </P>
        <P $size="10.4px" $weight="200" $line-height="21.2px" $color="#000">
          {description}
        </P>
      </Div>
    </Div>
  );
};

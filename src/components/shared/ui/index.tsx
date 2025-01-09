import React from "react";
import { Div, H1 } from "../styles";

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

export default SectionTitle;

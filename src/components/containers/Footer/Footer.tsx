import { Div, P } from "../../shared/styles";

const Footer = () => {
  return (
    <Div
      $padding="1rem 160px"
      $flex="flex"
      $justify-content="center"
      $align-items="center"
    >
      <P $size="14.4px" $weight="300" $color="#545454" $line-height="21.5px">
        {`Copyright © ${new Date().getFullYear()} by Emmanuel Ugoh.`}
      </P>
    </Div>
  );
};

export default Footer;

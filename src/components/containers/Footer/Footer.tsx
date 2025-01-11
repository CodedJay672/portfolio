import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Div, P } from "../../shared/styles";
import { FooterLink, Hr } from "./FooterStyles";

const Footer = () => {
  return (
    <Div
      $padding="4rem 160px"
      $flex="flex"
      $flex-direction="column"
      $justify-content="center"
      $align-items="center"
      $background-color="#3c3e670a"
      $width="100%"
      $gap="44px"
    >
      <Div
        $flex="flex"
        $justify-content="space-between"
        $align-items="center"
        $width="100%"
      >
        <Div $width="400px">
          <P
            $size="13.8px"
            $weight="400"
            $color="#3c3e67af"
            $line-height="24px"
          >
            The best way to predict the future is to invent it -- Alan Kay
          </P>
        </Div>
        <Div
          $width="100px"
          $flex="flex"
          $justify-content="space-evenly"
          $align-items="center"
        >
          <FooterLink href="https://web.facebook.com/Manny6456" target="_blank">
            <RiFacebookBoxLine color="#3c3e67af" size={14} />
          </FooterLink>
          <FooterLink
            href="https://www.instagram.com/tradermanny/"
            target="_blank"
          >
            <RiInstagramLine color="#3c3e67af" size={14} />
          </FooterLink>
          <FooterLink href="https://x.com/_IAmManny_" target="_blank">
            <RiTwitterLine color="#3c3e67af" size={14} />
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/emmanueljoel672/"
            target="_blank"
          >
            <RiLinkedinBoxLine color="#3c3e67af" size={14} />
          </FooterLink>
        </Div>
      </Div>
      <Hr />
      <P $size="11.4px" $weight="300" $color="#545454" $line-height="21.5px">
        {`Copyright © ${new Date().getFullYear()} by Emmanuel Ugoh.`}
      </P>
    </Div>
  );
};

export default Footer;

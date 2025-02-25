import { HiMail, HiPhoneIncoming } from "react-icons/hi";
import { Div, Img } from "../../shared/styles";
import { SectionTitle } from "../../shared/ui";
import {
  ContactDetails,
  ContactDiv,
  ContactImage,
  ContactInfo,
  ContactLink,
  ContactWrapper,
  HeadingText,
  SubtleText,
} from "./ContactStyles";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const ContactMe = () => {
  return (
    <ContactWrapper id="contact">
      <SectionTitle text="Let's Connect" />
      <ContactDiv>
        <ContactInfo>
          <SubtleText>Hey, join my network.</SubtleText>
          <HeadingText>There's so much we can achieve together.</HeadingText>
          <ContactDetails>
            In a world where your network is a determinant factor of your
            networth, I am on a mission of making high ticket connections with
            people of like mind. As an avid learner, I would love to learn from
            you. I am a very jovial and easy going dude, you would love my
            company.
          </ContactDetails>
          <Div
            $padding="3px"
            $flex="flex"
            $justify-content="start"
            $align-items="center"
            $margin="10px 0 0 0"
          >
            <HiPhoneIncoming size={20} color="#3c3e67" />:{" "}
            <ContactLink>+234 813 953 6456</ContactLink>
          </Div>
          <Div
            $padding="3px"
            $flex="flex"
            $justify-content="start"
            $align-items="center"
          >
            <HiMail size={20} color="#3c3e67" />:{" "}
            <ContactLink href="mailto:emmajoel6456@gmail.com" target="_blank">
              emmajoel6456@gmail.com
            </ContactLink>
          </Div>
          <Div
            $padding="3px"
            $flex="flex"
            $justify-content="start"
            $align-items="center"
          >
            <RiFacebookBoxFill size={20} color="#3c3e67" />:{" "}
            <ContactLink
              href="https://web.facebook.com/Manny6456"
              target="_blank"
            >
              Emmanuel Ugoh
            </ContactLink>
          </Div>
          <Div
            $padding="3px"
            $flex="flex"
            $justify-content="start"
            $align-items="center"
          >
            <RiLinkedinBoxFill size={20} color="#3c3e67" />:{" "}
            <ContactLink
              href="https://www.linkedin.com/in/emmanueljoel672/"
              target="_blank"
            >
              Emmanuel Joel
            </ContactLink>
          </Div>
          <Div
            $padding="3px"
            $flex="flex"
            $justify-content="start"
            $align-items="center"
          >
            <RiGithubFill size={20} color="#3c3e67" />:{" "}
            <ContactLink href="https://github.com/codedjay672" target="_blank">
              Codedjay672
            </ContactLink>
          </Div>
        </ContactInfo>
        <ContactImage>
          <Img
            src="/assets/profile.jpg"
            alt="contact img"
            $width="100%"
            $height="100%"
            $object-fit="contain"
          />
        </ContactImage>
      </ContactDiv>
    </ContactWrapper>
  );
};

export default ContactMe;

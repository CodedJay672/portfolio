import { Button, Img, P } from "../../shared/styles";
import {
  HeroButtonsContainer,
  HeroContainer,
  HeroImgContainer,
  HeroText,
  Wrapper,
} from "./HeroSectionStyles";
import { BiPaperPlane } from "react-icons/bi";

const HeroSection = () => {
  return (
    <Wrapper id="home">
      <HeroContainer>
        <HeroText>
          <P $color="#545454" $size="24px" $line-height="36px" $weight="400">
            Hi, i'm Emmanuel
          </P>
          <P $color="#0F172A" $size="48px" $line-height="60px" $weight="700">
            Front-End Web Developer
          </P>
          <P $color="#545454" $size="16px" $line-height="24px" $weight="300">
            I am Emmanuel Ugoh, a Front-End Web Developer with over three years
            of experience in crafting professional user experiences with clean,
            mordern designs. Coding is my passion, and I excel at solving
            complex problems with creative solutions.
          </P>
          <HeroButtonsContainer>
            <Button
              $width="190px"
              $height="44px"
              $border-radius="10px"
              $background-color="#0F172A"
              $color="#fff"
              $display="flex"
              $justify-content="center"
              $align-items="center"
              $gap="3px"
              $hover="#3c3e67"
              as="a"
              href="https://wa.com/+2349032705515"
              target="_blank"
            >
              <BiPaperPlane size="20" color="#fff" /> Shoot me a DM
            </Button>
            <Button
              $width="98px"
              $height="44px"
              $border-radius="10px"
              $border="1px solid #0F172A"
              $color="#0F172A"
              $hover="#3c3e670a"
              as="a"
              href="#about"
              $display="flex"
              $justify-content="center"
              $align-items="center"
            >
              About Me
            </Button>
          </HeroButtonsContainer>
        </HeroText>

        <HeroImgContainer>
          <Img
            src="/assets/profile.jpg"
            $height="100%"
            $width="100%"
            $object-fit="cover"
            alt="display image"
          />
        </HeroImgContainer>
      </HeroContainer>
    </Wrapper>
  );
};

export default HeroSection;

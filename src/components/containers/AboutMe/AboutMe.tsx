import { RiFacebookBoxFill } from "react-icons/ri";
import { Div, Img } from "../../shared/styles";
import { Education, Hobbies, SectionTitle, Summary } from "../../shared/ui";
import { ContentDiv, Input, Span } from "./AboutMeStyles";
import { PiInstagramLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import { ChangeEvent, useEffect, useState } from "react";

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState("summary");

  useEffect(() => {
    console.log(selectedTab + "-content");
  }, [selectedTab]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTab(e.target.value);
  };

  return (
    <Div
      id="about"
      $width="100%"
      $height="710.42px"
      $flex="flex"
      $flex-direction="column"
      as="section"
      $padding="5rem 160px"
    >
      <SectionTitle text="About Me" />
      <Div
        $width="100%"
        $flex="flex"
        $gap="50px"
        $grow="flex-1"
        $overflow="hidden"
        $margin="46px 0 0 0"
      >
        <Div $width="50%" $flex="flex" $grow="flex-1" $overflow="hidden">
          <Img
            src="/assets/profile.jpg"
            alt="work space"
            $width="100%"
            $height="100%"
            $object-fit="cover"
          />
        </Div>
        <Div $width="50%">
          <Div
            $width="100%"
            $padding="6px"
            $border="1px solid #E9E9E9"
            $border-radius="50px"
            $flex="flex"
            $justify-content="space-between"
            $align-items="center"
            $gap="6px"
            $margin="0 0 20px 0"
          >
            <Input
              type="radio"
              id="summary"
              name="about-me"
              value="summary"
              onChange={handleChange}
              checked={selectedTab === "summary"}
            />
            <Span as="label" htmlFor="summary">
              About
            </Span>

            <Input
              type="radio"
              id="education"
              name="about-me"
              value="education"
              onChange={handleChange}
              checked={selectedTab === "education"}
            />
            <Span as="label" htmlFor="education">
              Education
            </Span>

            <Input
              type="radio"
              id="hobbies"
              name="about-me"
              value="hobbies"
              onChange={handleChange}
              checked={selectedTab === "hobbies"}
            />
            <Span as="label" htmlFor="hobbies">
              Hobbies
            </Span>
          </Div>

          {selectedTab + "-content" === "summary-content" && (
            <ContentDiv id="summary-content">
              <Summary />
            </ContentDiv>
          )}

          {selectedTab + "-content" === "education-content" && (
            <ContentDiv id="education-content">
              <Education />
            </ContentDiv>
          )}
          {selectedTab + "-content" === "hobbies-content" && (
            <ContentDiv id="hobbies-content">
              <Hobbies />
            </ContentDiv>
          )}

          <Div $flex="flex" $gap="2px" $margin="10px 0 0 0">
            <RiFacebookBoxFill size={32} color="#3c3e67a1" />
            <PiLinkedinLogoFill size={32} color="#3c3e67a1" />
            <PiInstagramLogoFill size={32} color="#3c3e67a1" />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default AboutMe;

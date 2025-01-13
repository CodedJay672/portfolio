import { RiAddLine } from "react-icons/ri";
import { Img } from "../../shared/styles";
import { Education, Hobbies, SectionTitle, Summary } from "../../shared/ui";
import {
  AboutContentDiv,
  AboutContentSection,
  AboutWrapper,
  ContentDiv,
  ImageDiv,
  Input,
  LinkedInFollow,
  Span,
  TabHeader,
} from "./AboutMeStyles";
import { ChangeEvent, useState } from "react";

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState("summary");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTab(e.target.value);
  };

  return (
    <AboutWrapper id="about">
      <SectionTitle text="About Me" />
      <AboutContentSection>
        <ImageDiv>
          <Img
            src="/assets/profile.jpg"
            alt="work space"
            $width="100%"
            $height="100%"
            $object-fit="cover"
          />
        </ImageDiv>
        <AboutContentDiv>
          <TabHeader>
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
          </TabHeader>

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
          <LinkedInFollow
            href="https://LinkedIn.com/in/emmanueljoel672"
            target="_blank"
          >
            <RiAddLine size={20} color="#fff" /> Follow on LinkedIn
          </LinkedInFollow>
        </AboutContentDiv>
      </AboutContentSection>
    </AboutWrapper>
  );
};

export default AboutMe;

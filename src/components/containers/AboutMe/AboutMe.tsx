import { RiFacebookBoxFill } from "react-icons/ri";
import { Div, Img, P } from "../../shared/styles";
import { SectionTitle } from "../../shared/ui";
import { AboutMeContent, Input, Span } from "./AboutMeStyles";
import { PiInstagramLogoFill, PiLinkedinLogoFill } from "react-icons/pi";
import { useState } from "react";

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState("summary");

  const handleChange = (e: any) => {
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
        <Div $width="50%" $grow="flex-1">
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

          <Div id="content1">
            <AboutMeContent
              content="My name is Emmanuel Ugoh, and I am passionate about crafting
            exceptional user experiences as a Front-End Web Developer. With over
            3 years of hands-on experience in the industry, I currently thrive
            in my role at Sekure, where I contribute to building intuitive
            interfaces that drive user engagement and satisfaction.
            Previously, I had the opportunity to work remotely for Tech64, an
            African startup. This experience not only sharpened my technical
            skills but also enriched my understanding of professional standards
            in web development and the nuances of remote collaboration.
            Having completed an intership with ALX Africa, I have experienced
            first-hand collaboration with team mates and peers around Africa,
            working on projects and through Git and Github. This experience has
            opened my eyes to the endless possibilities of remote working."
            />
          </Div>
          {/* <Div id="content2">
            <AboutMeContent
              content="My name is Emmanuel Ugoh, and I am passionate about crafting
            exceptional user experiences as a Front-End Web Developer. With over
            3 years of hands-on experience in the industry, I currently thrive
            in my role at Sekure, where I contribute to building intuitive
            interfaces that drive user engagement and satisfaction.
            Previously, I had the opportunity to work remotely for Tech64, an
            African startup. This experience not only sharpened my technical
            skills but also enriched my understanding of professional standards
            in web development and the nuances of remote collaboration.
            Having completed an intership with ALX Africa, I have experienced
            first-hand collaboration with team mates and peers around Africa,
            working on projects and through Git and Github. This experience has
            opened my eyes to the endless possibilities of remote working."
            />
          </Div> */}
          {/* <Div id="content3">
            <AboutMeContent
              content="My name is Emmanuel Ugoh, and I am passionate about crafting
            exceptional user experiences as a Front-End Web Developer. With over
            3 years of hands-on experience in the industry, I currently thrive
            in my role at Sekure, where I contribute to building intuitive
            interfaces that drive user engagement and satisfaction.
            Previously, I had the opportunity to work remotely for Tech64, an
            African startup. This experience not only sharpened my technical
            skills but also enriched my understanding of professional standards
            in web development and the nuances of remote collaboration.
            Having completed an intership with ALX Africa, I have experienced
            first-hand collaboration with team mates and peers around Africa,
            working on projects and through Git and Github. This experience has
            opened my eyes to the endless possibilities of remote working."
            />
          </Div> */}

          <Div $flex="flex" $gap="2px" $margin="10px 0 0 0">
            <RiFacebookBoxFill size={32} color="#E9E9E9" />
            <PiLinkedinLogoFill size={32} color="#E9E9E9" />
            <PiInstagramLogoFill size={32} color="#E9E9E9" />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default AboutMe;

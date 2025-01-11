import { ChangeEvent, useState } from "react";
import { Div } from "../../shared/styles";
import { SectionTitle, SkillsCard } from "../../shared/ui";
import { Input, Span } from "../AboutMe/AboutMeStyles";
import { SkillDiv } from "./SkillsStyles";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("frontend");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTab(e.target.value);
  };

  return (
    <Div
      $width="100%"
      $padding="5rem 160px"
      id="skills"
      $flex="flex"
      $flex-direction="column"
      $justify-content="center"
      $align-items="center"
    >
      <SectionTitle text="Skills" />

      <Div
        $width="30%"
        $padding="6px"
        $border="1px solid #E9E9E9"
        $border-radius="50px"
        $flex="flex"
        $justify-content="space-between"
        $align-items="center"
        $gap="6px"
        $margin="10px 0"
      >
        <Input
          type="radio"
          id="frontend"
          name="my-skills"
          value="frontend"
          onChange={handleChange}
          checked={selectedTab === "frontend"}
        />
        <Span as="label" htmlFor="frontend">
          Frontend
        </Span>

        <Input
          type="radio"
          id="tools"
          name="my-skills"
          value="tools"
          onChange={handleChange}
          checked={selectedTab === "tools"}
        />
        <Span as="label" htmlFor="tools">
          Tools
        </Span>
      </Div>

      {selectedTab === "frontend" && (
        <SkillDiv id="frontend">
          <SkillsCard img="/assets/react.png" skill="React" />
          <SkillsCard img="/assets/js.svg" skill="Javascript" />
          <SkillsCard img="/assets/redux.png" skill="Redux" />
          <SkillsCard img="/assets/typescript.svg" skill="Typescript" />
          <SkillsCard img="/assets/swiperjs.png" skill="Swiper.js" />
          <SkillsCard img="/assets/nextjs.png" skill="NextJs" />
        </SkillDiv>
      )}

      {selectedTab === "tools" && (
        <SkillDiv id="tools">
          <SkillsCard img="/assets/vsc.png" skill="VSCode" />
          <SkillsCard img="/assets/git.png" skill="Git" />
          <SkillsCard img="/assets/github.png" skill="Github" />
          <SkillsCard img="/assets/npm.png" skill="NPM" />
        </SkillDiv>
      )}
    </Div>
  );
};

export default Skills;

import { ChangeEvent, useState } from "react";
import { SectionTitle, SkillsCard } from "../../shared/ui";
import { Input, Span } from "../AboutMe/AboutMeStyles";
import { SkillDiv, SkillsWrapper, SkillTabHeader } from "./SkillsStyles";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("frontend");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTab(e.target.value);
  };

  return (
    <SkillsWrapper id="skills">
      <SectionTitle text="Skills" />
      <SkillTabHeader>
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
      </SkillTabHeader>

      {selectedTab === "frontend" && (
        <SkillDiv id="frontend">
          <SkillsCard img="/assets/react.png" skill="React" />
          <SkillsCard img="/assets/js.svg" skill="Javascript" />
          <SkillsCard img="/assets/redux.png" skill="Redux" />
          <SkillsCard img="/assets/typescript.svg" skill="Typescript" />
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
    </SkillsWrapper>
  );
};

export default Skills;

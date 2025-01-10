import { Div } from "../../shared/styles";
import { SectionTitle, SkillsCard } from "../../shared/ui";

const Skills = () => {
  return (
    <Div $width="100%" $padding="5rem 160px" id="skills">
      <SectionTitle text="Skills" />
      <Div
        $flex="flex"
        $justify-content="center"
        $align-items="center"
        $gap="10px"
        $width="100%"
        $margin="46px 0 0 0"
      >
        <SkillsCard img="/assets/react.png" skill="React" />
        <SkillsCard img="/assets/js.png" skill="Javascript" />
        <SkillsCard img="/assets/redux.png" skill="Redux" />
        <SkillsCard img="/assets/swiperjs.png" skill="Swiper.js" />
      </Div>
    </Div>
  );
};

export default Skills;

import { Div } from "../../shared/styles";
import { ExperienceCard, SectionTitle } from "../../shared/ui";

const Experience = () => {
  return (
    <Div $padding="5rem 160px" id="experience">
      <SectionTitle text="Experience" />
      <Div
        $flex="flex"
        $justify-content="center"
        $align-items="center"
        $gap="10px"
        $width="100%"
        $margin="46px 0 0 0"
      >
        <ExperienceCard
          imageUrl="/assets/sekure.jpeg"
          company="Sekure"
          position="Front-end developer"
          role="Part-time"
          range="Sept 2024 - present"
          location="Cameroon"
          description="Building interactive user interfaces for the sekure business application. integrating backend reseources to make application update in real time."
          type="Remote"
        />

        <ExperienceCard
          imageUrl="/asset/profile.jpg"
          company="Highbridge homes"
          position="IT Officer"
          role="full-time"
          range="Nov 2023 - Nov 2024"
          location="Lagos - Nigeria"
          description="Managine all IT resources for the company. Ensuring all company online resources are active and up to date. Build company website for new Estate launching and update company website to improve traffic."
          type="Remote"
        />
        <ExperienceCard
          imageUrl="/assets/tech64Logo.svg"
          company="Tech64"
          position="Front-end developer"
          role="Part-time"
          range="Aug 2024 - present"
          location="Cameroon"
          description="Worked on Vanbook. An online school management system which manages financial as well as academic activities both for the students, management staff and the parents. I was responsible for working on mordern user interfaces which provide easy access to users allowing them to navigate around the application with ease."
          type="Remote"
        />
      </Div>
    </Div>
  );
};

export default Experience;

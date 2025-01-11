import { Div } from "../../shared/styles";
import { ProjectDetails, SectionTitle } from "../../shared/ui";
import { ProjectDiv } from "./ProjectStyles";

const Projects = () => {
  return (
    <Div $width="100%" $padding="5rem 160px" id="projects">
      <SectionTitle text="Projects" />
      <ProjectDiv
        $flex="flex"
        $width="100%"
        $gap="30px"
        $justify-content="space-evenly"
        $align-items="center"
        $margin="40px auto"
      >
        <ProjectDetails
          imageUrl="/assets/cleanbeautifulproperties.png"
          title="CleanBeautifulProperties - Realty Landingpage"
          desc="I collaborated with the design team on this project. I designed pixel-perfect user interfaces for to allow users navigate the page easily. This landing page features a clean mordern design, efficient user feedback mechanism and interesting animation using GSAP package which keep users engaged."
          tech={["React", "TailwindCSS", "React Icons"]}
          link="cleanbeautifulproperties.com"
          github="github.com/codedjay672/cleanbeautifulproperties"
        />
        <ProjectDetails
          imageUrl="/assets/sek-dashboard.png"
          title="Sekure Business - Finance Application"
          desc="Sekure is an online financial platform aimed at simplifying online purchases for users. I created the whole dashboard interface which depicts all the information."
          tech={["Next", "TailwindCSS", "ChartsJs", "React Query"]}
          link="sekure-business.vercel.app"
          github="github.com/Sekuretechnologies/Sekurebusiness_frontend"
        />
        <ProjectDetails
          imageUrl="/assets/HBLuxury.png"
          title="Highbridge Luxury - Real Estate Landingpage"
          desc="Highbridge Luxury is a real estate company aimed at providing luxury real estate deals for their users. I spearheaded the development of interactive landing page."
          tech={["React", "Tailwind CSS", "React Icons"]}
          link="highbridgeluxury.com"
          github="github.com/HBH-Codebase/HighbridgeLuxury"
        />
        <ProjectDetails
          imageUrl="/assets/vanbook-dashboard.png"
          title="Vanbook Application - School Management System"
          desc="Vanbook is a finance application for schools. This application helps schools manage their finances with ease. "
          tech={["React", "Tailwind CSS", "Redux", "React Query"]}
          link="vanbook.app"
          github="github.com/WakHerv7/vanbook-react"
        />
      </ProjectDiv>
    </Div>
  );
};

export default Projects;

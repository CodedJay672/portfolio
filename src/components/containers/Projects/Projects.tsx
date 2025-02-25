import { ProjectDetails, SectionTitle } from "../../shared/ui";
import { ProjectDiv, ProjectWrapper } from "./ProjectStyles";

const Projects = () => {
  return (
    <ProjectWrapper id="projects">
      <SectionTitle text="Projects" />
      <ProjectDiv>
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
        <ProjectDetails
          imageUrl="/assets/portfolio.png"
          title="Manny Dev - Portfolio Page"
          desc="This is a simple webpage with a mordern design. This project showcases the beauty of simplcity. It contains informtion about me, my experience, some projects I have worked on and my contact information."
          tech={["React", "styled Components", "React Icons"]}
          link=""
          github="github.com/WakHerv7/vanbook-react"
        />
      </ProjectDiv>
    </ProjectWrapper>
  );
};

export default Projects;

import { HiChevronDoubleRight } from "react-icons/hi";
import { Logo, LogoTitle, NavLink, NavMenu, Resume, Nav } from "./TopbarStyles";

const Topbar = () => {
  return (
    <Nav>
      <Logo as="a" href="/">
        <HiChevronDoubleRight size={30} color="#0F172A" />
        <LogoTitle>manny dev</LogoTitle>
      </Logo>
      <NavMenu>
        <NavLink href="#about" role="navigation">
          ABOUT
        </NavLink>
        <NavLink href="#skills" role="navigation">
          SKILLS
        </NavLink>
        <NavLink href="#projects" role="navigation">
          PROJECTS
        </NavLink>
        <NavLink href="#blogs" role="navigation">
          BLOGS
        </NavLink>
        <NavLink href="#experience" role="navigation">
          EXPERIENCE
        </NavLink>
        <NavLink href="#contact" role="navigation">
          CONTACT
        </NavLink>
      </NavMenu>
      <Resume href="/cv.pdf" download>
        Resume
      </Resume>
    </Nav>
  );
};

export default Topbar;

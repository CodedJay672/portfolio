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
        <NavLink href="#" role="navigation">
          ABOUT
        </NavLink>
        <NavLink href="#" role="navigation">
          SKILLS
        </NavLink>
        <NavLink href="#" role="navigation">
          PROJECTS
        </NavLink>
        <NavLink href="#" role="navigation">
          BLOGS
        </NavLink>
        <NavLink href="#" role="navigation">
          EXPERIENCE
        </NavLink>
        <NavLink href="#" role="navigation">
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

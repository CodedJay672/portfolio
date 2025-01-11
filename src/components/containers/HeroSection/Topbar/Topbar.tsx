import { Div, Img } from "../../../shared/styles";
import { Logo, LogoTitle, NavLink, NavMenu, Resume, Nav } from "./TopbarStyles";

const Topbar = () => {
  return (
    <Nav id="home">
      <Logo as="a" href="/">
        <Div
          $width="45px"
          $height="45px"
          $border-radius="50%"
          $overflow="hidden"
        >
          <Img
            src="/assets/profile.jpg"
            alt="logo"
            $width="100%"
            $height="100%"
            $object-fit="cover"
          />
        </Div>
        <LogoTitle>Manny Dev</LogoTitle>
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

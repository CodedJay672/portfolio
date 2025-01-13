import { RxHamburgerMenu } from "react-icons/rx";
import { Div, Img } from "../../../shared/styles";
import {
  Logo,
  LogoTitle,
  NavLink,
  NavMenu,
  Resume,
  Nav,
  HamburgerMenu,
  MobileNavMenu,
  CloseIcon,
  CloseMenu,
} from "./TopbarStyles";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
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

      {/* Hamburger mobile menu */}
      {isOpen && (
        <MobileNavMenu>
          <CloseIcon onClick={handleToggle}>
            <RiCloseFill size={32} color="#fff" />
          </CloseIcon>
          <CloseMenu onClick={handleToggle}>
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
          </CloseMenu>
        </MobileNavMenu>
      )}

      <HamburgerMenu onClick={handleToggle}>
        <RxHamburgerMenu size={32} />
      </HamburgerMenu>
      <Resume href="/cv.pdf" download>
        Resume
      </Resume>
    </Nav>
  );
};

export default Topbar;
